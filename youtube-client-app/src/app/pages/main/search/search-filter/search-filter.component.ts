import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SearchFilterComponent {
  public sortByValue: string = '';
  public filterValue: string = '';

  @Input() public openStatus: boolean = false;
  @Output() public changeSortStateEvent = new EventEmitter();
  @Output() public getInputEvent = new EventEmitter();

  getInput(): void {
    this.getInputEvent.emit(this.filterValue);
  }

  changeSortState(stateValue: string): void {
    this.sortByValue = stateValue;
    this.changeSortStateEvent.emit(stateValue)
  }

}
