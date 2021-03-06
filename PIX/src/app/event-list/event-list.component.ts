
import {Component, OnInit} from '@angular/core';
import {Events} from "../shared/events.model";
import {HttpClient} from '@angular/common/http'
import {PixService} from "../app.service";
import {Router} from '@angular/router';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  providers: [PixService]
})
export class EventListComponent implements OnInit {


  myEvents: Events[]=new Array<Events>();
  private service: PixService;
  constructor(service: PixService, private router: Router) {
    this.service = service;
    //this.loadEventList();
  }

  ciccio(item: Events){
    console.log(item);
    this.router.navigate(['/editevent'], {queryParams: item})
  }
  

  ngOnInit() {
    console.log('entra');
    // Make the HTTP request:
    this.service.getMyEvents().subscribe(data => {
      // Read the result field from the JSON response.
      console.log("boh");
      let j = 0;
      for (let i in data) {
        var event = data[i];
        event.id = i;
        if (j !== 4) {
          this.myEvents.push(event);
          j++;
          console.log(j)
        } else {
          //this.myEvents
        }
      }
      console.log(this.myEvents)
    });
  }

}
