import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyCustom'
})
export class CurrencyCustomPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
  
    if(args.length>0){
        let [data]=args;
        return value*data;
    }
    else{
      return value*85;
    }
    
  }

}
