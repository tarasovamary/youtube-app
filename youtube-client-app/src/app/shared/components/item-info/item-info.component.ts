import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ISearchItemFeModel } from '../../../core/store/index';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemInfoComponent {
  public viewImageUrl: string = './assets/images/view.png';
  public likeImageUrl: string = './assets/images/like.png';
  public countImageUrl: string = './assets/images/count.png';

  @Input() card: ISearchItemFeModel;

  @Input() viewCount = '';
  @Input() likeCount = ''; 
  @Input() commentCount = '';
}
