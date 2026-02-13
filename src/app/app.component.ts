import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import{ CounterComponent } from './counter/counter.component';
import { EventsComponent } from './events/events.component';
import { InputComponent } from './input/input.component';
import { ConditionsComponent } from './conditions/conditions.component';
import {DirectivesComponent } from './directives/directives.component'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, SignupComponent,
     CounterComponent, EventsComponent, InputComponent , ConditionsComponent, DirectivesComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-pract';
}
