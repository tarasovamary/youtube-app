import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './index';
import { CreateCardFormComponent } from './create-card-form/create-card-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    AdminComponent,
    CreateCardFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
  ],
  exports: [
    AdminComponent,
    CreateCardFormComponent,
  ]
})
export class AdminModule { }
