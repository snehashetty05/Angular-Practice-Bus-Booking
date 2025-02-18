import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../greeting/greeting.component';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent,CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homeMessage = signal('Welcome to the Angular Application! Sneha!');
  onKeyUp(event : KeyboardEvent){
    console.log(`user pressed ${event.key} key`);
  }
}
