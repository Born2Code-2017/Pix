import { Component, OnInit } from '@angular/core';
import { Group } from './group.model'
@Component({
    selector: 'app-aside',
    templateUrl: 'aside.component.html',
    styleUrls: ['./aside.component.css']
})

export class AsideComponent implements OnInit {
    public appGroup: string;
    group: Group[];

    constructor() {
        this.loadGroup();
    }

    loadGroup(){
       this.group=[
           {
               name:'Piselloidi',
              // image:'img/gruppoFoto.jpg'
           }
       ]
    }

    

    ngOnInit() { }
}