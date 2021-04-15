import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MesssagesComponent } from './messsages/messsages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyCompComponent } from './fold/my-comp/my-comp.component';
import { MonCompComponent } from './mon-comp/mon-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MesssagesComponent,
    DashboardComponent,
    MyCompComponent,
    MonCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
