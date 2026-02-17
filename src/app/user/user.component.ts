import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User1Component } from '../user1/user1.component';
import { User2Component } from '../user2/user2.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, User1Component, User2Component],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  
  showChildren = true;
  parentMessage = 'Hello from Parent Component!';
  counter=0;

  constructor() {
    console.log('🟡 UserComponent constructor');
  }

  ngOnInit() {
    console.log('🟢 UserComponent ngOnInit');
  }

  toggleChildren() {
    this.showChildren = !this.showChildren;
  }

  ngOnDestroy() {
    console.log('🔴 UserComponent ngOnDestroy');
  }
}
