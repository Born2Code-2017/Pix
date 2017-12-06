
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CookieService} from "ngx-cookie-service";



import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {AsideComponent} from './aside/aside.component';
import {FooterComponent} from './footer/footer.component';
import {EventsComponent} from './events/events.component';
import {LoginComponent} from './login/login.component';
import {NewEventComponent} from './new-event/new-event.component';
import {EventListComponent} from './event-list/event-list.component';
import {routing} from './app.routes';
import {EventdetailComponent} from './eventdetail/eventdetail.component';
import {PixService} from "./app.service";
import { EditComponent } from './edit-event/edit-event.component';



@NgModule({
  declarations: [
    AppComponent, MenuComponent, AsideComponent, FooterComponent, EventsComponent, LoginComponent, NewEventComponent, EventListComponent, EventdetailComponent,
    EditComponent
  ],
  imports: [

    BrowserModule, FormsModule, HttpClientModule, routing

  ],
  providers: [PixService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
