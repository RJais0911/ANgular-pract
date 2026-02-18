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
import { ValidationComponent } from './validation/validation.component';
import { CustomValidatorsComponent } from './custom-validators/custom-validators.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ServiceComponent } from './service/service.component';
import { ProductListComponent } from './product-list/product-list.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule, LoginComponent, SignupComponent,
    CounterComponent, EventsComponent, InputComponent,
    ConditionsComponent, DirectivesComponent, PipesComponent,
    UserComponent , FormsComponent, ReactiveFormsComponent,
     ValidationComponent, CustomValidatorsComponent,
      DynamicFormComponent , ServiceComponent , ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-pract';
}
