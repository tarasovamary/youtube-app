import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { ISearchItem, ISearchResponse, ISearchItemFeModel } from '../../store/index';
import { HttpClient } from '@angular/common/http';
import { convertBEtoFEModel } from '../../../shared/index';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  public cards: ISearchItemFeModel[] = [];

  constructor(private http: HttpClient) {}

  private fetchCards(searchValue: string): Observable<ISearchResponse> {
    const urlSearch: string = `search?maxResults=15&type=video&part=snippet&q=${searchValue}`;
    return this.http.get<ISearchResponse>(urlSearch);
  }

  private fetchCardsId(searchId: string): Observable<ISearchResponse> {
    const urlVideo: string = `videos?&part=snippet,statistics&id=${searchId}`;
    return this.http.get<ISearchResponse>(urlVideo);
  }

  getCardsList(searchValue: string): Observable<ISearchItemFeModel[]> {
    return this.fetchCards(searchValue)
    .pipe(
      switchMap(
        (response: ISearchResponse) => {
        const cardsId = response.items.map((item: any) => item.id.videoId).join(',');
        return this.fetchCardsId(cardsId);
        }
      ),
      map(
        (response: ISearchResponse) => {
        this.cards = response.items.map((item: ISearchItem) => convertBEtoFEModel(item));
        return this.cards;
        }
      ),
    )
  }

  getCardsDetails(cardId: string): Observable<ISearchItemFeModel> {
    return this.fetchCardsId(cardId)
    .pipe(
      map((response: ISearchResponse) => convertBEtoFEModel(response.items[0]))
    );
  }
}
