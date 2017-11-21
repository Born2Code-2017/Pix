import {Component, OnInit} from '@angular/core';
import {Event} from './events.model';
import {PixService} from "../app.service";


@Component({
  selector: 'app-events',
  templateUrl: 'events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [PixService]
})

export class EventsComponent implements OnInit {

  eventsList: Event[];
  public incoming = [];
  private service: PixService;


  constructor(service: PixService) {
    this.service = service;
    this.loadEvents();
  }

  loadEvents() {

    this.service.getEvents().subscribe(arg => this.eventsList = arg);


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
