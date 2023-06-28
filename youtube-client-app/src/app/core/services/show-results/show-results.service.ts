import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowResultsService {
  public requestValue$: Observable<string>
  private requestValue$$ = new Subject<string>();

  constructor() {
    this.requestValue$ = this.requestValue$$.asObservable();
  }

  setRequestValue(inputValue: string): void {
    this.requestValue$$.next(inputValue);
  }

  getRequestValue(): Observable<string> {
    return this.requestValue$;
  };

}
