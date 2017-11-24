import { Component, OnInit } from '@angular/core';
import { Event} from "../events/events.model";
import { HttpClient } from '@angular/common/http'
import { PixService } from "../app.service";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  providers: [PixService]
})
export class EventListComponent implements OnInit {

  myEvents: Event[];
  private service: PixService;
  constructor(service: PixService) {
    this.service = service;
    //this.loadEventList();
  }

  ngOnInit() {
    console.log('entra');
    // Make the HTTP request:
    this.service.getUsers().subscribe(data => {
      // Read the result field from the JSON response.
      let j = 0;
      for (let i in data) {
        var event = data[i]
        event.id = i
        if (j !== 4){
        this.myEvents.push(event);
        j++
        console.log(j)
        }else{
          this.myEvents
        }
      }
    });
  }

}
