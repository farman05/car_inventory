import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import {ManufacturerlistComponent} from './components/manufacturer/manufacturerlist/manufacturerlist.component';
import {ModelListingComponent} from './components/model/model-listing/model-listing.component';
import {AddModelComponent} from './components/model/add-model/add-model.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './auth/auth.guard';
import {LoginlayoutComponent} from './components/layout/loginlayout/loginlayout.component';
import {MainComponent} from './components/layout/main/main.component';
const routes: Routes = [
        {
          path : '',
          component : LoginlayoutComponent,
          children: [
            {
              path: '',
              component: LoginComponent
            }
          ]
        },
        {
          path : '',
          component : MainComponent,
          canActivate : [AuthGuard],
          children: [
            {
              path: 'manufacturer',
              component: ManufacturerlistComponent,
              canActivate : [AuthGuard]
            },
            {
              path: 'model',
              component: ModelListingComponent,
              canActivate : [AuthGuard]
            },
            {
              path: 'addModel',
              component: AddModelComponent,
              canActivate : [AuthGuard]
            }
          ]
        },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
