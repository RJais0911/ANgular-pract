import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
   message:string="Welcome to the Signup Page";
  isdisabled=false;
  handleSignup(){
    this.message="Signup Successfully!!!";
    this.isdisabled=true;
  }
  
}
