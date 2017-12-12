import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {PixService} from '../app.service';
import {CookieService} from "ngx-cookie-service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [PixService]
})
export class LoginComponent {
  service: PixService;

  constructor(service: PixService, private router: Router, private cookieService: CookieService) {
    this.service = service;
    this.callForUsers();
  }

  protected logged: boolean;
  protected password: string;
  protected username: string;
  protected userJSON: string;
  protected passwordJSON: string;
  myarr = [];

  authenticate() {
    for (const x in this.myarr) {
      if (this.username === this.myarr[x].username) {
        console.log(this.myarr[x].id);
        this.router.navigateByUrl('/home');
        this.cookieService.set('user', this.username);
        localStorage.setItem('user', this.username);
        localStorage.setItem('index', this.myarr[x].id);
      }
    }
  }

  callForUsers() {
    this.service.getUsers().subscribe(data => {
      // this.userJSON = data['0'];
      // this.passwordJSON = data['password'];
      for (const i in data) {
        const name = data[i];
        name.id = i;
        this.myarr.push(name);
      }
      console.log(this.myarr);
    });
    this.authenticate();
  }

}
