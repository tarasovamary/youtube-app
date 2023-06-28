import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ISearchItemFeModel, CardsService } from '../../core/index';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  public card: ISearchItemFeModel;
  public backImageUrl: string = './assets/images/back.png';

  constructor(private cardsService: CardsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const { id } = this.route.snapshot.params;
    this.subscription = this.cardsService.getCardsDetails(id).subscribe(card => {
      this.card = card;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
