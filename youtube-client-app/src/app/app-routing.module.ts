import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";

let routes: Routes = [
  { 
    path: '', redirectTo: '/main', pathMatch: 'full',
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module')
    .then((m) => m.MainModule),
  },
  { 
    path: 'login', pathMatch: 'full',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule),
  },
  { 
    path: 'admin', pathMatch: 'full',
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule),
  },
  {
    path:'**', component: NotFoundComponent,
  },
]
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule],
})

export class AppRoutingModule {

}