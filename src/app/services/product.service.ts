import { Injectable } from '@angular/core';

@Injectable({    //is service ko hum apne project ke andar kahi bhi use kr skte hai
  providedIn: 'root'
})
export class ProductService {

  constructor() { 
    console.log("product service");
  }

  getProductData(){
    return [
      { name:'mobile', brand:'samsung', price:50000},
      { name:'tablet', brand:'lenovo', price:20000},
      { name:'laptop', brand:'hp', price:70000},
    ]
  }
}
