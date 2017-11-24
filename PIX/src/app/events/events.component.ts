import { Component, OnInit } from '@angular/core';
import { Event } from './events.model';
import { HttpClient } from '@angular/common/http'
//import {PixService} from "../app.service";



@Component({
  selector: 'app-events',
  templateUrl: 'events.component.html',
  styleUrls: ['./events.component.css'],
  //providers: [PixService]
})

export class EventsComponent implements OnInit{
 


  eventsList: Event[] = new Array<Event>();
  public incoming = [];
  //private service: PixService;


 /* constructor(private http: HttpClient) {
    //this.service = service;
    this.loadJSON();
    //this.loadEvents();
  }*/

  loadEvents() {

    //this.service.getEvents().subscribe(arg => this.eventsList = arg);

    
  }

  results: Array<any>;
  
   // Inject HttpClient into your component or service.
   constructor(private http: HttpClient) {}
  
   ngOnInit(): void {
     console.log('entra');
     // Make the HTTP request:
     this.http.get('https://pics-313d5.firebaseio.com/pix/eventi.json').subscribe(data => {
       // Read the result field from the JSON response.
       for (let i in data) {
         var event= data[i]
         event.id=i
        this.eventsList.push(event);
      for (let item of this.eventsList){
        if (this.eventsList[i]=== this.eventsList[0]){
          this.incoming.push(this.eventsList[i])
          this.eventsList.splice(0,1)
        }
        console.log(this.incoming)
      }
    }
    console.log(this.eventsList)
     });
    }
  }
