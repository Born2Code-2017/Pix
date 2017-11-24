import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {EventsComponent} from './events/events.component';
import {NewEventComponent} from './new-event/new-event.component';
import {EventListComponent} from './event-list/event-list.component';
import {LoginComponent} from './login/login.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: EventsComponent
  },
  {
    path: 'newevent',
    component: NewEventComponent
  },
  {
    path: 'eventlist',
    component: EventListComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent

  }
];

export const routing: ModuleWithProviders =
  RouterModule.forRoot(appRoutes);