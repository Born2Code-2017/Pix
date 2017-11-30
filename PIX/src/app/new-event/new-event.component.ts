import {Component} from '@angular/core';
import {PixService} from '../app.service';

import {Events} from './events.model';
import {Router} from '@angular/router';


@Component({
  selector: 'app-newevent',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css'],
  providers: [PixService]
})
export class NewEventComponent {
  service: PixService;

  listaEventi = [];

  private name: string;
  private description: string;
  private time: string;
  private day: string;
  private location: string;
  // private id: number;

  constructor(service: PixService, private router: Router) {// initialize an http request
    this.service = service;
  }

  createEvent() {
    let event; // refers to "events.model.ts" and initialize a new class
    event = new Events();
    event.name = this.name;
    event.description = this.description;
    event.time = this.time;
    event.date = this.day;
    event.place = this.location;
    event.owner = localStorage.getItem('user');
    /*event.photo = pic;*/
    this.listaEventi = event; // push the event in the object
    console.log(this.listaEventi);
    this.saveEvent();
  }

  saveEvent() {
    /*localStorage.setItem('Events', JSON.stringify(this.listaEventi)); // save new event in local storage (just for debug).
    this.http.post('https://pics-313d5.firebaseio.com/pix/eventi.json', this.listaEventi).subscribe(); // send the http request to server*/
    this.service.createEvent(this.listaEventi).subscribe();
    this.service.postInMyEvents(this.listaEventi).subscribe();
    this.router.navigateByUrl('/myevents');
  }
}
