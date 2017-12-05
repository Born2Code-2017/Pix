import {Component, Input, OnInit} from '@angular/core';
import {PixService} from "../app.service";
import {Events} from "../shared/events.model";
import {ActivatedRoute, Router} from "@angular/router";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-eventdetail',
  templateUrl: './eventdetail.component.html',
  styleUrls: ['./eventdetail.component.css'],
})
export class EventdetailComponent implements OnInit {

  public sub: any;
  //public service: PixService;
  public details;
  //public dettaglio : Events;
  public showDateFormatted: string;

  formatDate(date) {
    let splitDate = date.split('-', 3);
    this.showDateFormatted = splitDate[2] + '/' + splitDate[1] + '/' + splitDate[0];
  }

  constructor(private service: PixService, private route: ActivatedRoute, private router: Router) {
    this.service = service;
  }

  ngOnInit() {
    console.log('service in detail: ' + this.service.eventDetails);
    this.sub = this.route
      .queryParams
      .subscribe(data => {
        this.details = data;
        console.log(this.details.date);
        console.log('typeof data:' + typeof data);
        console.log(data);

        //let cazzo = JSON.parse(params.dettagli);
      });
    //let detailFromLS = localStorage.getItem('details');
    //this.details = JSON.parse(detailFromLS);
    // console.log(this.details);
    this.formatDate(this.details.date);
  }
}
