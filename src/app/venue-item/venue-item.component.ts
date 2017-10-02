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
      photo: "https://s3.amazonaws.com/eventplicity-booking-agreement-images/prd/venues/101-steak/101-steak-logo-final.png",
      proposal_url : `https://app.eventplicity.com/101-steak/proposals/2d92c5511ecc4cb28a5c20b9d099d93f/edit`
      },
      {
        venue_name : "10th and Piedmont",
        status : "active",
        agent  :"Natalie Daaka",
        photo: "https://s3.amazonaws.com/eventplicity-booking-agreement-images/prd/venues/10th-and-piedmont/10th-and-piedmont-logo-edited.png",
        proposal_url: `https://app.eventplicity.com/10th-and-piedmont/proposals/3e61661a95fc4b1dba28d5c1415bf9b6/edit`

      },
      {
        venue_name : "aldos-ristorante",
        status : "active",
        agent  :"Casey Moore",
        photo: "https://s3.amazonaws.com/eventplicity-booking-agreement-images/prd/venues/aldos-ristorante/aldos-ristorante-logo.jpg",
        proposal_url: `https://app.eventplicity.com/aldos-ristorante/proposals/779d629dcfd24df7ab658939309709ca/edit`
      },
      {
        venue_name : "Alexander's Tavern",
        status : "active",
        agent  :"Adam Mickler",
        photo: "https://s3.amazonaws.com/eventplicity-booking-agreement-images/prd/venues/alexanders-tavern/alexanders-tavern-p-logo.jpg",
        proposal_url: `https://app.eventplicity.com/alexanders-tavern/proposals/840fe202de784410844e0e70dd28e100/edit`
      
      }
    ]

    



  // constructor() { }

  // ngOnInit() {
  // }

}
