import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  public appName: string;
  public user: string;

  constructor() {
    this.appName = 'Pix';
    this.user = localStorage.getItem('user');
  }

  ngOnInit() {
  }
}
