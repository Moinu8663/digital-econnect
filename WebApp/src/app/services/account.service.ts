import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';
import { AccountDetails } from '../model/AccountDetails';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpsvc:HttpClient) { }

  GetAccount()
  {
    return this.httpsvc.get(environment.apiURL);
  }


  CreateAccount({account_no,name,balance,email})
  {
    return this.httpsvc.post(environment.apiURL,{account_no,name,balance,email});
  }

  UpdateAccount(accNo: number, account:AccountDetails)
  {
    return this.httpsvc.put(environment.apiURL+ "/" + accNo,account);
  }

  GetAccountByNo(account_no:number)
  {
    return this.httpsvc.get(environment.apiURL+"/" + account_no);
  }

  //services to be added
  //1. create account. 2) get account by no 3) update account
}
