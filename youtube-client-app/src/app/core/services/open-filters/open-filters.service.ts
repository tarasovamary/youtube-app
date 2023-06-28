import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenFiltersService {
  private openStatus: boolean = false;

  onClick: EventEmitter<boolean> = new EventEmitter();

  showFilterPanel() {
    this.openStatus = !this.openStatus;
    this.onClick.emit(this.openStatus);
  }

}
