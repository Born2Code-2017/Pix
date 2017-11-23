import { Component, OnInit } from '@angular/core';
import { Event} from "../events/events.model";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  eventsList: Event[];

  constructor() {
    this.loadEventList();
  }

  ngOnInit() {
  }

  loadEventList() {
    this.eventsList = [
      {
        id: 0,
        name: "astrophotography",
        description: "Sto cazzo",
        date: "12/12/2017",
        hour: "6:30 pm",
        owner: "Robert Foster ",
        location: "Monte Mario,Roma",
        image: "",
        partecipants: 57
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
        partecipants:37
      }
    ]
  }

}
