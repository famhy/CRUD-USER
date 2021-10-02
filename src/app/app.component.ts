import { Component } from '@angular/core';

import { UsersService } from './service/users.service';
import {User} from './User'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD-user';
  Users : User[]=[]
  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    // this.usersService.getUser().subscribe((user)=>(this.Users=user))
    // console.log(this.Users)
  }
  // addUser(user:User){
  //   console.log(user)
  //   this.usersService.addUser(user).subscribe((user)=>(this.Users.push(user)))
  //   this.usersService.getUser().subscribe((user)=>(this.Users=user))
  //   console.log(this.Users)

  //  }
} 
