import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  handleEvent(event:MouseEvent){
    console.log(" CLICK Event called!", event.type);
  }
  handleEvent1(event:MouseEvent){
    // console.log("function called!!", event.target);
    console.log(" Box1 function called!!", event.type);
  }
  handleEvent2(event:MouseEvent){
    // console.log("function called!!", event.target);
    console.log(" Box2 function called!!", event.type);
  }
  handleEvent3(event:MouseEvent){
    // console.log("function called!!", event.target);
    console.log("Box3 function called!!", event.type);
  }

  handleEvent4(event:Event){
    console.log("input function called!!",event.type);
    console.log("value",(event.target as HTMLInputElement).value);
  }




}
