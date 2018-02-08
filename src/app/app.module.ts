import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';




import { MomentModule } from 'angular2-moment';
import { MaterialModule } from './material.module';


import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,

    MomentModule        // makes all the angular2-moment pipes available for use in your app components.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
