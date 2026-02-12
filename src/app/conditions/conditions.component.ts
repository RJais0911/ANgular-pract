import { Component } from '@angular/core';

@Component({
  selector: 'app-conditions',
  imports: [],
  templateUrl: './conditions.component.html',
  styleUrl: './conditions.component.css'
})
export class ConditionsComponent {
  display=true;
  togglediv=true;

  hide(){
    this.display=false;
  }
  show(){
    this.display=true;
  }
  toggle(){
    this.display=!this.display;
  }
  toggleTwo(){
    this.togglediv=!this.togglediv;

  }

  color=1;
  handleButton(val:number){
    this.color=val;
  }

  handleInput(event:Event){
    this.color=parseInt((event.target as HTMLInputElement).value);

  }
  Colors='red';
  changeColor(val:string){
    this.Colors=val;
  }

  changeColorInput(event:Event){
    this.Colors=(event.target as HTMLInputElement).value;
  }

}
