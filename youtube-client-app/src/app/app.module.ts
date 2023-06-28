import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './pages/main/main.module';
import { DetailsModule } from './pages/details/details.module';
import { AuthModule } from './pages/auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { AdminModule } from './pages/admin/admin.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './shared/index';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MainModule,
    AppRoutingModule,
    DetailsModule,
    SharedModule,
    AuthModule,
    AdminModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
