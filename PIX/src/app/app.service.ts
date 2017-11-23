import {Event} from './events/events.model';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PixService {
  private dbUrl: string;

  constructor(private http: Http) {
    this.dbUrl = 'https://pics-313d5.firebaseio.com/eventi/';
  }

  public getEvents() {
    return this.http.get(this.dbUrl)
      .map((response: Response) => response.json());
  }

  public createEvents() {
    return this.http.post(this.dbUrl, Event)
      .map((response: Response) => response.json());
  }

  public deleteEvent() {
    return this.http.delete(this.dbUrl)
      .map((response: Response) => response.json());
  }

}


