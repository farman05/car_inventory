import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ManufacturerlistComponent } from './components/manufacturer/manufacturerlist/manufacturerlist.component';
import { AddmanufacturerComponent } from './components/manufacturer/addmanufacturer/addmanufacturer.component';
import { DataTablesModule } from 'angular-datatables';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModelListingComponent } from './components/model/model-listing/model-listing.component';
import { AddModelComponent } from './components/model/add-model/add-model.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/layout/main/main.component';
import { LoginlayoutComponent } from './components/layout/loginlayout/loginlayout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ManufacturerlistComponent,
    AddmanufacturerComponent,
    ModelListingComponent,
    AddModelComponent,
    LoginComponent,
    MainComponent,
    LoginlayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
