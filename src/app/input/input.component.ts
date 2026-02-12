import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
 display = '';
 name = '';

getName(event: Event) {
  const input = event.target as HTMLInputElement;
  this.name = input.value;
}

showName() {
  this.display = this.name;
}
setName(){
  this.name="Ruchi jaiswal";
}

// template reference variable
  email='';
  getEmail(val: string){
    console.log(val);
    this.email=val;
  }
  setEmail(){
    this.email="default@relinns.com";
  }

  }
  