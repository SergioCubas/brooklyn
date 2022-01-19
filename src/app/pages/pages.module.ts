import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home/home.component';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { Ng5SliderModule } from 'ng5-slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicesComponent } from './home/components/services/services.component';
import { CategoriesComponent } from './home/components/categories/categories.component';
import { OffersComponent } from './home/components/offers/offers.component';
import { NewsComponent } from './home/components/news/news.component';
import { StoreComponent } from './home/components/store/store.component';
import { BenefitsComponent } from './home/components/benefits/benefits.component';
import { BannerComponent } from './home/components/banner/banner.component';

@NgModule({
  declarations: [
    HomeComponent,
    ServicesComponent,
    CategoriesComponent,
    OffersComponent,
    NewsComponent,
    StoreComponent,
    BenefitsComponent,
    BannerComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    CarouselModule,
    Ng5SliderModule,
    FormsModule,
    ReactiveFormsModule,

    AppRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
