import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
    private apiUrl = 'http://localhost:5161';
  constructor(private http:HttpClient) { }
  AddUser(userobj:User)
  {
    return this.http.post("",userobj);
  }
  GetUsers()
  {
    return this.http.get("");
  }
  Register(user:User)
  {
    return this.http.post("http://localhost:5161/api/User/Register",user);
  }
  Login(email,password)
  {
    return this.http.post("http://localhost:5161/api/User/Login",{email,password});
  }
  IsAuthenticated(token:any)
  {
    return this.http.post("",null)
    {
      // Headers:{"Authorization":'Bearer ${token}'}
    }
  }
}

