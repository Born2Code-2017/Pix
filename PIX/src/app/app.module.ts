import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {AsideComponent} from './aside/aside.component';
import {FooterComponent} from './footer/footer.component';
import {EventsComponent} from './events/events.component';
import {LoginComponent} from './login/login.component';
import {NewEventComponent} from './new-event/new-event.component';
import {EventListComponent} from './event-list/event-list.component';
import {routing} from './app.routes';


@NgModule({
  declarations: [
    AppComponent, MenuComponent, AsideComponent, FooterComponent, EventsComponent, LoginComponent, NewEventComponent, EventListComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
