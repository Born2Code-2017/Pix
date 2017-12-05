import {Events} from './new-event/events.model';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PixService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
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

  public putInMyEvents(id: string,event: Events) {
    const index = localStorage.getItem('index');
    const url = this.apiUrl + 'utente/' + index + '/myevents/'+ id +'.json';
    return this.http.put(url,event);
  }


}
