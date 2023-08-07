import { Component, EventEmitter, OnInit } from '@angular/core';
import { AccountDetails } from '../model/AccountDetails';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.css']
})
export class AccountdetailsComponent{
  public accountlist?:any
  constructor(private svc:AccountService){}

  public account_no?:any;
  //accountChange = new EventEmitter<any>();
  ngOnInit()
  {
   this.GetAccount();
  }


  GetAccount()
  {
    this.svc.GetAccountByNo(Number(localStorage.getItem("account_no"))).subscribe(data=>{console.log(data);
    this.accountlist=data});
    //this.accountChange.emit(this.accountlist);
  }
}
