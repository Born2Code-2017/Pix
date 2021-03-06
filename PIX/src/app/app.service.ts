import {Events} from "./shared/events.model";
import {Injectable, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class PixService {
  private apiUrl: string;
  public eventDetails: any;

  constructor(private http: HttpClient, private cookieService: CookieService) {
    this.apiUrl = 'https://pics-313d5.firebaseio.com/pix/';
  }

  public getEvents() {
    const url = this.apiUrl + 'eventi.json';
    return this.http.get(url);
  }

  public getUsers() {
    const url = this.apiUrl + 'utente.json';
    return this.http.get(url);
  }

  public createEvent(event: Events[]) {
    const url = this.apiUrl + 'eventi.json';
    return this.http.post(url, event);
  }

  public getMyEvents() {
    const index = localStorage.getItem('index');
    const url = this.apiUrl + 'utente/' + index + '/myevents.json';
    return this.http.get(url);
  }

  public postInMyEvents(event: Events[]) {
    const index = localStorage.getItem('index');
    const url = this.apiUrl + 'utente/' + index + '/myevents.json';
    return this.http.post(url, event);
  }

  /*public getEventDetail(data) {
    this.eventDetails = data;
    console.log(this.eventDetails);
  }*/
  public putInMyEvents(id: string,event: Events) {
    const index = localStorage.getItem('index');
    const url = this.apiUrl + 'utente/' + index + '/myevents/'+ id +'.json';
    return this.http.put(url,event);
  }

  public getImage(){
    const index = localStorage.getItem('index');
    const url = this.apiUrl + 'utente/' + index + '/image.json';
    return this.http.get(url);
  }

  public putImage(image: string){
    const index = localStorage.getItem('index');
    const url = this.apiUrl + 'utente/' + index + '/image.json';
    return this.http.put(url, image);
  }


}
