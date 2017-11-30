import {Component, OnInit} from '@angular/core';
import {Event} from './events.model';
import {PixService} from "../app.service";
import {Router} from "@angular/router";

//import {PixService} from "../app.service";


@Component({
  selector: 'app-events',
  templateUrl: 'events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [PixService]
})

export class EventsComponent implements OnInit {


  eventsList: Event[] = [];
  public incoming = [];
  private service: PixService;


  constructor(service: PixService, private router: Router) {
    this.service = service;
    //this.loadEvents();
  }


  results: Array<any>;

  // Inject HttpClient into your component or service.

  ngOnInit(): void {
    console.log('entra');
    // Make the HTTP request:
    this.service.getEvents().subscribe(data => {
      // Read the result field from the JSON response.
      let j = 0;
      for (let i in data) {
        let event = data[i];
        event.id = i;
        if (j !== 7) {
          this.eventsList.push(event);
          j++;
          console.log(j)
        } else {
          // this.eventsList;
        }
        for (let item of this.eventsList) {
          if (this.eventsList[i] === this.eventsList[0]) {
            this.incoming.push(this.eventsList[i]);
            this.eventsList.splice(0, 1)
          }
          // console.log(this.incoming)
        }
      }
    });
  }

  goToeventDetail(data) {
    console.log('Data in home is: ', data);
    let savedata = JSON.stringify(data);
    localStorage.setItem('details', savedata);
    this.service.getEventDetail(data);
    this.router.navigate(['/event-detail']);
  }

}
