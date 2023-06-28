import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainRoutingModule } from './main-routing.module';

import { HeaderComponent, SearchComponent, SearchResultsComponent,
         SearchItemComponent,SearchInputComponent, SearchFilterComponent,
         LoginComponent,
 } from './index';

import { CardsService, ApiInterceptor } from '../../core/index';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';




@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    SearchResultsComponent,
    SearchItemComponent,
    SearchInputComponent,
    SearchFilterComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule,
    HttpClientModule,
  ],
  exports:[
    HeaderComponent,
    SearchComponent,
    SearchResultsComponent,
    SearchItemComponent,
    SearchInputComponent,
    SearchFilterComponent,
    LoginComponent,
  ], 
  providers: [
    CardsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    }
  ],
})
export class MainModule { }
