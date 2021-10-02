import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {User} from "../User"
import {HttpClient,HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    
  })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = "http://localhost:5001/user"
  constructor(private http:HttpClient) { }

  getUser():Observable<User[]> {
    console.log(this.http.get<User[]>(this.apiUrl))
    return this.http.get<User[]>(this.apiUrl);
  }
  deleteUser(user:User):Observable<User>{
    const url=`${this.apiUrl}/${user.id}`
    return this.http.delete<User>(url)
  }
  
  addUser(user:User):Observable<User>{
    return this.http.post<User>(this.apiUrl,user,httpOptions)
  }
}
