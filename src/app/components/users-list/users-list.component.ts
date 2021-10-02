import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import {User} from '../../User'

import { UiService } from '../../service/ui.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

  

export class UsersListComponent implements OnInit {
  displayedColumns: string[] = ['id','First Name', 'Last Name', 'Email','remove'];
  showAddUser :boolean=false;
  subscription!:Subscription;
  // dataSource = ELEMENT_DATA;
  Users : User[]=[]
  dataSource = this.Users;
  constructor(private usersService : UsersService,private uiService:UiService ) {

    this.subscription = this.uiService.onToggle().
   subscribe((value)=>(this.showAddUser=value))
   }

  

  ngOnInit(): void {
    this.usersService.getUser().subscribe((user)=>(this.Users=user))
    console.log(this.Users)
  }
  onDelete(user:User):void{
    console.log(user.id)
    this.usersService.deleteUser(user).subscribe(()=>(this.Users=this.Users.filter((t)=>t.id!=user.id)))
  }
  addUser(user:User){
    console.log(user)
    this.usersService.addUser(user).subscribe((user)=>{this.Users.push(user);
    
    })
    this.usersService.getUser().subscribe((user)=>(this.Users=user))
    console.log(this.Users)
   }

   toggleAddUser(){
    this.uiService.toggleAddUser();
  }

}
