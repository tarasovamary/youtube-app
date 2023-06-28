import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent, DetailsComponent } from '../index';
import { authGuard } from '../../core/index'

let routes: Routes = [
  {
    path: '', component: SearchComponent,
    canActivate: [authGuard]
  },
  {
    path: 'details/:id', component: DetailsComponent
  },
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule],
})

export class MainRoutingModule {

}