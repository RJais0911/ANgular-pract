import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyCustomPipe } from './currency-custom.pipe';
import { TimecustomPipe } from './timecustom.pipe';
@Component({
  selector: 'app-pipes',
  imports: [CommonModule, CurrencyCustomPipe, TimecustomPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  title='relinns technology';
  name='ANIL';
  date= new Date();
  amount=10;

  currentTime= new Date();

  }
