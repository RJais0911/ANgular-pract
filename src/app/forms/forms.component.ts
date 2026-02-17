import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  FormsModule, NgForm  } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [FormsModule, CommonModule,],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  userDetails:any={};
  addDetails(val:NgForm){
    console.log(val);

  this.userDetails = val;
  }



}
