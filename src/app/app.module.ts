import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { AppRoutingModule } from './app-routing.module';


/* Modules */
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    HttpClientModule,

    AppRoutingModule,
    SharedModule,
    PagesModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
