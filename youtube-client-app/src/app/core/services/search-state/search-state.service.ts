import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ISearchItemFeModel} from '../../index';

@Injectable({
  providedIn: 'root'
})
export class SearchStateService {
  private cardsState = new BehaviorSubject<ISearchItemFeModel[]>([]);

  get cards$(): Observable<ISearchItemFeModel[]> {
    return this.cardsState.asObservable();
  }

  set cards(cards: ISearchItemFeModel[]) {
    this.cardsState.next(cards);
  }
}
