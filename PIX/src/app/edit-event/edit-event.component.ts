import { Component, OnInit,EventEmitter, Output, Input } from '@angular/core';
import { Events } from '../shared/events.model';
import { HttpClient } from '@angular/common/http'
import { PixService } from "../app.service";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'edit-event',
    templateUrl: 'edit-event.component.html',
    styleUrls: ['./edit-event.component.css'],
    providers: [PixService]
})

export class EditComponent implements OnInit {


    public details: object;
    public currentEvent: Events;
    private service: PixService;

    lista:Events;

    private name: string;
    private description: string;
    private time: string;
    private day: string;
    private location: string;
    public polpa:string;

    constructor(service: PixService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {
        this.service = service;
        this.currentEvent= new Events;
    }




    ngOnInit() {
        this.details = this.activatedRoute.queryParams.subscribe((params:Events) => {
            console.log(params)
            this.currentEvent.name = params.name;
            this.currentEvent.date = params.date;
            this.currentEvent.place = params.place;
            this.currentEvent.time = params.time;
            this.currentEvent.description = params.description;
            this.currentEvent.id = params.id;
        })
    }

   /* edit(){
        let event; // refers to "events.model.ts" and initialize a new class
        event = new Events();
        event.name = this.currentEvent.name;
        event.description = this.currentEvent.description;
        event.time = this.currentEvent.time;
        event.date = this.currentEvent.date;
      event.place = this.currentEvent.place;
        event.id=this.currentEvent.id;
        /*event.photo = pic;
        this.lista = event; // push the event in the object
        console.log(this.lista);
        this.save();
}*/

    editSave() {
        //this.onSave.emit();
        console.log(this.currentEvent.id)
        console.log(this.currentEvent.name);
        this.service.putInMyEvents(this.currentEvent.id, this.currentEvent).subscribe();
        this.service.getMyEvents().subscribe();
        this.router.navigateByUrl('/home');
        
    }
}