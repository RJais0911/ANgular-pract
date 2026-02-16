import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timecustom'
})
export class TimecustomPipe implements PipeTransform {

  transform(value: Date, format:string='12hr'): string {
   if (!value) return '';
    let hours = value.getHours();
    let minutes = value.getMinutes().toString().padStart(2, '0');
    let seconds = value.getSeconds().toString().padStart(2, '0');

    if (format === '24hr') {
      return `${hours}:${minutes}:${seconds}`;
    }

    if (format === 'detailed') {
      return `${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
    }

    // Default 12hr format
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${hours}:${minutes}:${seconds} ${ampm}`;
  }
}