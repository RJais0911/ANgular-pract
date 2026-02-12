import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isdisabled=false;
  message:string="Welcome to the Login Page";
  handleLogin(){
    this.message="Login Successfully!!!";
    this.isdisabled=true;
  }
  }
