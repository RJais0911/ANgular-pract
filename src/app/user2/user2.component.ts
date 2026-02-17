import {
  Component,
  Input,
  OnInit,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
  ViewChild,
  ElementRef,
  afterNextRender,
  afterRender
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css']
})
export class User2Component
  implements
    OnInit,
    OnChanges,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {

  //  Input from parent component
  @Input() message = '';

  // ViewChild to access template DOM
  @ViewChild('box') box!: ElementRef;

  constructor() {
    console.log('🔵 User2 constructor');

   
    afterNextRender(() => {
      console.log('🔵 User2 afterNextRender (once)');
    });

 
    afterRender(() => {
      console.log('🟢 User2 afterRender (every render)');
    });
  }

  // it get Triggered when @Input value changes
  ngOnChanges(changes: SimpleChanges) {
    console.log('🔵 User2 ngOnChanges', changes);
  }


  ngOnInit() {
    console.log('🔵 User2 ngOnInit');
  }

  //  Content projected via <ng-content>
  ngAfterContentInit() {
    console.log('🔵 User2 ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('🔵 User2 ngAfterContentChecked');
  }

  // View / DOM lifecycle
  ngAfterViewInit() {
    console.log('🔵 User2 ngAfterViewInit');

    if (this.box) {
      console.log(
        '🔵 ViewChild text:',
        this.box.nativeElement.textContent
      );
    }
  }

  ngAfterViewChecked() {
    console.log('🔵 User2 ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('🔵 User2 ngOnDestroy');
  }
}
