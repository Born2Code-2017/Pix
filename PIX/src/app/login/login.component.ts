import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private req: HttpClient, private router: Router) {
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
        console.log('daje');
        this.router.navigateByUrl('/home');
      }
    }
  }

  callForUsers() {
    this.req.get('https://pics-313d5.firebaseio.com/pix/utente.json').subscribe(data => {
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
