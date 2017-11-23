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
  }

}
