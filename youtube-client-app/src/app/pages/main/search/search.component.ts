import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Observable, tap, debounceTime, distinctUntilChanged, filter, takeUntil, Subject } from 'rxjs';
import { CardsService, OpenFiltersService, ShowResultsService, SearchStateService, ISearchItemFeModel } from '../../../core/index';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  public cards$: Observable<ISearchItemFeModel[]>;
  public showCards: boolean = true;
  public openStatus: boolean = false;
  public filterValue: string = '';
  public sortState: boolean = false;
  public sortByValue: string = '';
  public changeSortStateEvent = new EventEmitter();
  public getInputEvent = new EventEmitter();

  constructor(private showResultsService: ShowResultsService,
              private openFiltersService: OpenFiltersService,
              private cardsService: CardsService,
              private searchStateService: SearchStateService) {
    this.openFiltersService.onClick.subscribe(openValue => this.openStatus = openValue);
  }
  
  ngOnInit(): void  {
    const requestValue$ = this.showResultsService.getRequestValue()
    .pipe (
      debounceTime(700),
      distinctUntilChanged(),
      filter(
        (requestValue) => (
          requestValue.length >= 3
          )
      ),
      tap(requestValue => {
        this.cardsService.getCardsList(requestValue).subscribe(cards => {
          this.searchStateService.cards = cards;
        });
      }),
      takeUntil(this.destroy$)
    );
    requestValue$.subscribe();
    this.cards$ = this.searchStateService.cards$;
  }
  
  ngOnDestroy(): void  {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeSortState(stateValue: string): void {
    this.sortByValue = stateValue;
    this.sortState = !this.sortState;
  }

  getInput(inputValue: string): void  {
    this.filterValue = inputValue;
  }
  
}
