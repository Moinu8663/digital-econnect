import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators,FormControl } from '@angular/forms';
import { AccountService } from '../services/account.service';
//  import { Country } from '../validators/country.model';
// import { ParentErrorStateMatcher } from '../validators/password.validator';
// import { PhoneValidator } from '../validators/phone.validator';
// import { UsernameValidator } from '../validators/username.validator';
import { Country } from '../validators/country.model';
import { ParentErrorStateMatcher } from '../validators/password.validator';
import { PhoneValidator } from '../validators/phone.validator';
import { UsernameValidator } from '../validators/username.validator';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

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
  logout() 
  {
    localStorage.removeItem('account_no');
  }

   
}
