import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpenFiltersService, ShowResultsService} from './index';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    OpenFiltersService,
    ShowResultsService
  ],
})
export class CoreModule { }
