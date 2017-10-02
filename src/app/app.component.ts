import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //./app.component.css
  styleUrls: []
})
export class AppComponent {
  zoom: number =20;
  lat: number = 29.651634;
  lng: number = -82.324829;

  //markers
  markers: Marker[] = [
    {
    name: '101 - Steak',
    lat: 33.865737,
    lng: -84.471255,
    draggable: true
    },
    {
      name: '10th and Piedmont',
      lat: 33.782757,
      lng: -84.380276,
      draggable: true
    },
    {
      name: 'aldos-ristorante',
      lat: 26.138125,
      lng:  -81.749010,
      draggable: true
    },
    {
      name: "Alexander's Tavern",
      lat:39.283289,
      lng:  -76.593588,
      draggable: true
    },
    {
      name: "Amelia's",
      lat:29.649308,
      lng:  -82.324176,
      draggable: true
    }
  ];
  constructor(){

  }
}

interface Marker{
  name: string;
  lat: number;
  lng: number;
  draggable?: boolean;
}
