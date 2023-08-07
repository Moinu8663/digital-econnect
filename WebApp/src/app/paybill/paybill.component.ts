import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paybill',
  templateUrl: './paybill.component.html',
  styleUrls: ['./paybill.component.css']
})
export class PaybillComponent implements OnInit{
  selectedService: string | undefined;
  selectedCompany: string | undefined;

  AccountDetails: any = {};
  accNo:any = 0;
  amount: any;

  constructor(private accService: AccountService, private router:Router) { }

  ngOnInit(): void {
    this.accNo= Number(localStorage.getItem('account_no'));
    this.AccountDetails = this.accService.GetAccountByNo(this.accNo).subscribe((data) => {
      console.log(data); 
      this.AccountDetails = data;});
  }
 
  services = ['Water', 'Electricity', 'Mobile Recharge'];

  companies = {
    Water: ['Water Board of Rajasthan', 'Water Authority of Delhi', 'Mumbai Water Supply'],
    Electricity: ['Rajasthan Electricity Board', 'Delhi Electricity Distribution Company', 'Maharashtra State Electricity'],
    'Mobile Recharge': ['Airtel', 'Vodafone Idea', 'Reliance Jio', 'BSNL'],
    
  };
  
  paybill(){
    // Add your logic to send money here
   
    // Add logic to perform the money transfer here
    if(this.AccountDetails.balance >=this.amount)
    {
     this.AccountDetails.balance = this.AccountDetails.balance - this.amount;
    }
    else{
      alert("Not Sufficient Balance");
      return;
    }
  //  this.AccountDetails.balance = this.AccountDetails.balance - this.amount;
    console.log(this.AccountDetails.balance);
    console.log(this.accNo)
    this.accService.UpdateAccount(this.accNo,this.AccountDetails).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/Dashboard']);
  }
  );
}

}