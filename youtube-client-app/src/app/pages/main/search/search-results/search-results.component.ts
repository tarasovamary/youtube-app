import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ISearchItemFeModel } from '../../../../core/store/index';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SearchResultsComponent {
  @Input() public cards$: Observable<ISearchItemFeModel[]>;
  @Input() public filterValue: string = '';
  @Input() public sortState: boolean = false;
  @Input() public sortByValue: string = '';
  @Input() public showCards: boolean;

}
