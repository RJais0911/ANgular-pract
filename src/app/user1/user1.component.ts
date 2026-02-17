import {
  Component,
  Input,
  OnInit,
  OnChanges,
  DoCheck,
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
  selector: 'app-user1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input() count = 0;

  localCount = 0; 

  @ViewChild('title') title!: ElementRef;

  constructor() {
  console.log('🟠 User1 constructor');

  // Runs once after next DOM render
  afterNextRender(() => {
    console.log('🔵 User1 afterNextRender (runs once)');
  });

  // Runs after the every render
  afterRender(() => {
    console.log('🟢 User1 afterRender (runs every render)');
  });
}

  handleCount() {
    this.localCount++;
    console.log('🟠 Button clicked → localCount:', this.localCount);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('🟠 User1 ngOnChanges', changes);
  }

  ngOnInit() {
    console.log('🟠 User1 ngOnInit');
  }

  ngDoCheck() {
    console.log('🟠 User1 ngDoCheck');
  }

  ngAfterViewInit() {
    console.log('🟠 User1 ngAfterViewInit');
    console.log('🟠 ViewChild text:', this.title.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('🟠 User1 ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('🟠 User1 ngOnDestroy');
  }
}
