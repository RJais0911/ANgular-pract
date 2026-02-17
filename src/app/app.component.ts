import {  Component  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';  
import { CounterComponent } from './counter/counter.component';
import { EventsComponent } from './events/events.component';
import { InputComponent } from './input/input.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { UserComponent } from './user/user.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule, LoginComponent, SignupComponent,
    CounterComponent, EventsComponent, InputComponent,
    ConditionsComponent, DirectivesComponent, PipesComponent,
    UserComponent , FormsComponent, ReactiveFormsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-pract';
}
