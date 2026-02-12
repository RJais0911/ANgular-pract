import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import{ CounterComponent } from './counter/counter.component';
import { EventsComponent } from './events/events.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, SignupComponent, CounterComponent, EventsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-pract';
}
