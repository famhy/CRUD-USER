import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { UsersService } from '../../service/users.service';
import {User} from '../../User'
import { Subscription } from 'rxjs';
import { UiService } from '../../service/ui.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @Output() onAddUser:EventEmitter<User>=new EventEmitter();
  Users : User[]=[]
  id!:number;
  firstname!:string;
  lastname!:string;
  mail!:string;
  showAddUser :boolean=false;
  subscription!:Subscription;

  constructor(private uiService : UiService) { 
    this.subscription = this.uiService.onToggle().
    subscribe((value)=>(this.showAddUser=value))
  }

  ngOnInit(): void {
   
  }
  onSubmit(){

    console.log("this.firstname")
    const newUser : User={
      id:this.id,
      FirstName:this.firstname,
      LastName:this.lastname,
      mail:this.mail,
    }
    console.log(this.firstname)
    this.onAddUser.emit(newUser)
    // this.addUser(newUser)
    this.id = Number("");
    this.firstname="";
    this.lastname="";
    this.mail="";

    
  } 
  


}
