import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightWidgetComponent } from './flight-widget/flight-widget.component';
import { LetterComponent } from './letter/letter.component';
import { SingleLetterComponent } from './single-letter/single-letter.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightWidgetComponent,
    LetterComponent,
    SingleLetterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
