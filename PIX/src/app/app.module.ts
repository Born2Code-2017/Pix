
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'


import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {AsideComponent} from './aside/aside.component';
import {FooterComponent} from './footer/footer.component';
import {EventsComponent} from './events/events.component';
import {LoginComponent} from './login/login.component';
import {NewEventComponent} from './new-event/new-event.component';
import {EventListComponent} from './event-list/event-list.component';
import {routing} from './app.routes';
import { ImageUploadModule } from "angular2-image-upload";
import { EditComponent } from './edit-event/edit-event.component';


@NgModule({
  declarations: [
    AppComponent, MenuComponent, AsideComponent, FooterComponent, EventsComponent, LoginComponent, NewEventComponent, EventListComponent,
    EditComponent
  ],
  imports: [

    BrowserModule, FormsModule, HttpClientModule, routing, ImageUploadModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
