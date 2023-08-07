import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.component.html',
  styleUrls: ['./send-money.component.css']
})

export class SendMoneyComponent implements OnInit{

  constructor(private accService: AccountService, private router:Router) { }
  confirmation: boolean = false;
  transfer: any = { amount: 0 };
  defaultSenderAccountNo: string = 'SENDER_ACCOUNT_NUMBER'; // Replace 'SENDER_ACCOUNT_NUMBER' with the actual sender's account number
  receiverAccountNo: string = ''; // Initialize the receiver's account number as an empty string

  AccountDetails: any = {};
  accNo:any = 0;

  ngOnInit(): void {
    this.accNo= Number(localStorage.getItem('account_no'));
    this.AccountDetails = this.accService.GetAccountByNo(this.accNo).subscribe((data) => {
      console.log(data); 
      this.AccountDetails = data;});

  }

  sendMoney() {
    // Add your logic to send money here
    console.log('Amount to be transferred:', this.transfer.amount);
    console.log('Sender Account No:', this.defaultSenderAccountNo);
    console.log('Receiver Account No:', this.receiverAccountNo);
    console.log('Confirmation:', this.confirmation);
    // Add logic to perform the money transfer here
   if(this.AccountDetails.balance >=this.transfer.amount)
   {
    this.AccountDetails.balance = this.AccountDetails.balance - this.transfer.amount;
   }
   else{
     alert("Not Sufficient Balance");
     return;
   }
   
    console.log(this.AccountDetails.balance);
    console.log(this.accNo)
    this.accService.UpdateAccount(this.accNo,this.AccountDetails).subscribe((data) => {
      console.log(data);
     
    });

    this.router.navigate(['/Accountdetails']);
  }

}
 
