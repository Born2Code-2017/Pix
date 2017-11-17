import {Component} from '@angular/core';
import {Event} from "../events/events.model";

@Component({
  selector: 'app-newevent',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent {

  events: Event[];
  array = [];
  private name: string;
  private description: string;
  private time: string;
  private day: string;
  private location: string;

  createEvent() {
    let event;
    event = new Event();
    event.name = this.name;
    event.description = this.description;
    event.time = this.time;
    event.date = this.day;
    event.place = this.location;
    /*event.photo = pic;*/
    this.array.push(event);
    console.log(this.array);
    this.saveEvent();
  }

  saveEvent() {
    localStorage.setItem('Events', JSON.stringify(this.array));
  }

  constructor() {
  }
}
