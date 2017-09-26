import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VenueItemComponent } from './venue-item/venue-item.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    VenueItemComponent,
    MapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
