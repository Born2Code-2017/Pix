import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  protected logged: boolean;

  protected password: string;
  protected username: string;
  protected userJSON: string;
  protected passwordJSON: string;
  public currentUser: string;

  authenticate() {
    this.logged = this.username === this.userJSON && this.password === this.passwordJSON;
  }

  constructor() {
    this.authenticate();
  }

  ngOnInit() {
  }

}
