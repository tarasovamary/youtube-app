import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent, LoginFormComponent } from './index';



@NgModule({
  declarations: [
    AuthComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
  ],
  exports: [
    AuthComponent,
    LoginFormComponent,
  ]
})
export class AuthModule { }
