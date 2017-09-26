import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-venue-item',
  templateUrl: './venue-item.component.html',
  styleUrls: ['./venue-item.component.css']
})
export class VenueItemComponent  { //implements OnInit

    int_name = "Get Name Details through Interpolation!";
    binding_name = "Get Name through Binding";

    venue_details = [
      {
      venue_name : "101 steak",
      status : "active",
      agent  :"Jami Furino",
      photo: "https://s3.amazonaws.com/eventplicity-booking-agreement-images/prd/venues/101-steak/101-steak-logo-final.png"
      },
      {
        venue_name : "10th and Piedmont",
        status : "active",
        agent  :"Natalie Daaka",
        photo: "https://s3.amazonaws.com/eventplicity-booking-agreement-images/prd/venues/10th-and-piedmont/10th-and-piedmont-logo-edited.png"

      },
      {
        venue_name : "aldos-ristorante",
        status : "active",
        agent  :"Casey Moore",
        photo: "https://s3.amazonaws.com/eventplicity-booking-agreement-images/prd/venues/aldos-ristorante/aldos-ristorante-logo.jpg"
      },
      {
        venue_name : "Alexander's Tavern",
        status : "active",
        agent  :"Adam Mickler",
        photo: "https://s3.amazonaws.com/eventplicity-booking-agreement-images/prd/venues/alexanders-tavern/alexanders-tavern-p-logo.jpg"
      
      }
    ]

    



  // constructor() { }

  // ngOnInit() {
  // }

}
