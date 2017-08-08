import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

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
  posts:Post[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) {
    console.log('constructor ran..');

  }

  ngOnInit() {
    console.log('ngOnInit ran...');

    this.name = 'Julio Jones';
    this.email = 'bestWRAllTime@HOF.com';
    this.age = 30;
    this.address = {
      street:'1234 Falcons Dr',
      city: 'Atlanta',
      state:'GA'
    }
    this.hobbies = ['Write code', 'Watch movies', 'Listen to music'];
    this.hello ='Hai there';

    this.dataService.getPosts().subscribe((posts) => {
      //console.log(posts);
      this.posts = posts;
    });
  }

  onClick(){
    this.name='Matt Bryant';
    this.hobbies.push('New Hobby');
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(i){
    this.hobbies.splice(i, 1);
  }

  // deleteHobby(hobby){
  //   console.log(hobby);
  //   for(let i=0;i<this.hobbies.length;i++){
  //     if(this.hobbies[i] == hobby){
  //       this.hobbies.splice(i,1);
  //     }
  //   }
  // }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}


interface Address{
  street:string,
  city:string,
  state:string
}

interface Post{
  id: number,
  title:string,
  body:string,
  userId:number
}


