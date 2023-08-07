import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
//import * as jwt from 'jsonwebtoken';
import { map } from 'rxjs';
import { environment } from '../environment/environment';
//import { environment } from 'src/environment/environment';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  constructor(private router:Router,private http:HttpClient) { }

  isAuthenticated():boolean{
    if (sessionStorage.getItem('token')!==null) {
        return true;
    }
    return false;
  }

  canAccess(){
    if (!this.isAuthenticated()) {
 
        this.router.navigate(['/login']);
    }
  }
  canAuthenticate(){
    if (this.isAuthenticated()) {
     
      this.router.navigate(['/dashboard']);
    }
  }

  register(name:string,email:string,password:string){
       
     return this.http
      .post<{idToken:string}>(
        'https://localhost:44335/api/User/Register',
          {displayName:name,email,password}
      );
  }

  storeToken(token:string){
      sessionStorage.setItem('token',token);
  }

  login(email:string,password:string){
   
      return this.http.post<{idToken:string}>(
          'https://localhost:44335/api/User/Login',
            {email,password}
      ) ;
  }

  detail(){
    let token = sessionStorage.getItem('token');

    return this.http.post<{users:Array<{localId:string,displayName:string}>}>(
        'https://localhost:44335/api/User/Login',
        {idToken:token}
    );
  }

  removeToken(){
    sessionStorage.removeItem('token');
  }
  
}
