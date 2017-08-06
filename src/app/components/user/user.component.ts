import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;

  constructor() {
    console.log('constructor ran..');
   }

  ngOnInit() {
    console.log('ngOnInit ran..');

    this.name = 'Julio Jones';
    this.age = 30;
    this.email = 'greatestWRofAllTime@gmail.com';
    this.address = {
      street:'50 Main st',
      city:'Atlanta',
      state:'GA'
    };
    this.hobbies = ['Write code','Watch movies','Listen to music'];
    this.hello = 'hello';
  }

}


interface Address{
  street:string,
  city:string,
  state:string
}