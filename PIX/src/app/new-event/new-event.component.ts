import {Component} from '@angular/core';

import {Events} from './events.model';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-newevent',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent {

  // events: Events[];
  listaEventi = {};

  private name: string;
  private description: string;
  private time: string;
  private day: string;
  private location: string;

  constructor(private http: HttpClient) { // initialize an http request
  }

  createEvent() {
    let event; // refers to "events.model.ts" and initialize a new class
    event = new Events();
    event.name = this.name;
    event.description = this.description;
    event.time = this.time;
    event.date = this.day;
    event.place = this.location;
    /*event.photo = pic;*/
    this.listaEventi = event; // push the event in the object
    console.log(this.listaEventi);
    this.saveEvent();
  }

  saveEvent() {
    localStorage.setItem('Events', JSON.stringify(this.listaEventi)); // save new event in local storage (just for debug).
    this.http.post('https://pics-313d5.firebaseio.com/pix/eventi.json', this.listaEventi).subscribe(); // send the http request to server
  }
}
