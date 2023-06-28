import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent {
  public requestValue: string = '';
  @Output() public requestSearchEvent = new EventEmitter();

  setRequestValue(requestValue: string): void {
    this.requestValue = requestValue;
    this.requestSearchEvent.emit(requestValue);
  }
}
