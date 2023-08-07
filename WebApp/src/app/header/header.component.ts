import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environment/environment';
import { User } from '../model/user';
 


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private route:Router)
  {}
  logout() 
  {
    localStorage.removeItem('email');
    localStorage.removeItem('account_no');
    this.route[("/")]
  }

  OnLogout()
  {
    this.logout();

  }
 
}

