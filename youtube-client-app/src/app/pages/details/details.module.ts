import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailsRoutingModule } from './details-routing.module';
import { CardsService } from '../../core/index';
import { DetailsComponent } from './index';


@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    SharedModule,
  ],
  providers: [
    CardsService,
  ],
  exports: [
    DetailsComponent
  ]
})
export class DetailsModule { }
