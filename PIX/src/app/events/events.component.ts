import {Component, OnInit} from '@angular/core';
import {Event} from './events.model'

@Component({
  selector: 'app-events',
  templateUrl: 'events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {

  eventsList: Event[];
  public incoming = [];


  constructor() {
    this.loadEvents();
  }

  loadEvents() {
    this.eventsList = [
      {
        id: 0,
        name: "astrophotography",
        description: "Sto cazzo",
        date: "12/12/2017",
        hour: "6:30 pm",
        owner: "Robert Foster ",
        location: "Monte Mario,Roma",
        image: "C:\Users\Valerio\Desktop\data\img\img0.jpg",
        partecipants: 5
      },
      {
        id: 1,
        name: "Portrait",
        description: "Sto cazzo",
        date: "13/12/2017",
        hour: "4:30 pm",
        owner: "Ilaria Vercelli ",
        location: "Milano,Ilaria's House",
        image: "./img/img4.jpg",
        participants: 5
      },

    ]
    for (let item of this.eventsList) {
      if (item.id === 0) {
        this.incoming.push(item);
        this.eventsList.splice(0, 1);
      }
    }
    console.log(this.incoming)
  }

  ngOnInit() {
  }

}
