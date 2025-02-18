import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TodosComponent } from './todos/todos.component';
import { SearchComponent } from './bus-booking/search/search.component';
import { BookingComponent } from './bus-booking/booking/booking.component';

export const routes: Routes = [
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  {path: 'search', component: SearchComponent},
  {path: 'booking', component: BookingComponent}
];
