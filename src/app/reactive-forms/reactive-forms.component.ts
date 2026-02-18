import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
  name=new FormControl();
  password=new FormControl();

  displayValue(){
    console.log(this.name.value);
    console.log(this.password.value);
  }

  profileForm= new FormGroup({
    name: new FormControl('anil'),
    password:new FormControl('123'),
    email:new FormControl('anil@test.com'),

  })
  
  //submit handler
  onSubmit(){
    console.log(this.profileForm.value);
  }

  setValue(){
    this.profileForm.setValue({
      name:'peter',
      password:'321',
      email:'peter@test.com',
          })
  }



}
