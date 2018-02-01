import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { MomentModule } from 'angular2-moment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    MomentModule    // makes all the angular2-moment pipes available for use in your app components.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
