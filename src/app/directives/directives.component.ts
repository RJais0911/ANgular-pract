import { Component } from '@angular/core';
import { NgClass, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
@Component({
  selector: 'app-directives',
  imports: [NgIf, NgFor , NgSwitch , NgSwitchCase, NgSwitchDefault , NgClass],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  show=true;


  students=["Anil","Peter","Bruce","Leo"];

  studentsData=[
    {name:"Anil", age:29, email:"anil@test.com"},
    {name:"Sam", age:24, email:"sam@test.com"},
    {name:"Peter", age:26, email:"peter@test.com"},
    {name:"Shivam", age:21, email:"shivam@test.com"},
  ]

  block=0;
  updateBlock(){
    this.block++;
  }

  color='red ';
  changeColor(color: string){
    this.color=color;

  }

}
