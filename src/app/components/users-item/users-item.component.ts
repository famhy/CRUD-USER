import { Component, OnInit,Input } from '@angular/core';
import {User} from "../../User"
@Component({
  selector: 'app-users-item',
  templateUrl: './users-item.component.html',
  styleUrls: ['./users-item.component.css']
})
export class UsersItemComponent implements OnInit {
  // displayedColumns: string[] = ['Id','First Name', 'Last Name', 'Email','remove'];
 @Input() user!:User
  constructor() { }

  ngOnInit(): void {
    console.log(this.user)
  }

}
