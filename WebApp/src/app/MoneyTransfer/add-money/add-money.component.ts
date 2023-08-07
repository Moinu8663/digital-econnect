import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.component.html',
  styleUrls: ['./add-money.component.css']
})
export class AddMoneyComponent implements OnInit{

  AccountDetails: any = {};
  accNo:any = 0;

  constructor(private accService: AccountService, private router:Router) { }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    //call account service and get account details by account no
    this.accNo= Number(localStorage.getItem('account_no'));
    this.AccountDetails = this.accService.GetAccountByNo(this.accNo).subscribe((data) => {
      console.log(data); 
      this.AccountDetails = data;});

  }
  transfer: any = {
    amount: 0,
    beneficiary: ''
  };

  onSubmit() {
    // Implement your submit logic here
    console.log('Form submitted successfully!');

    this.AccountDetails.balance = this.AccountDetails.balance + this.transfer.amount;
    console.log(this.AccountDetails.balance);
    console.log(this.accNo)
    this.accService.UpdateAccount(this.accNo,this.AccountDetails).subscribe((data) => {
      console.log(data);
      
    });
    this.router.navigate(['/Accountdetails']);

    //account no and amount
    // fetch account details from account no
    //add balance to account's balance by amount you get from the form

    //send an update request to the server and pass the account details
  }
}
