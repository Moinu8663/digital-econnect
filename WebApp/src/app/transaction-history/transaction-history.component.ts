import { Component, OnInit } from '@angular/core';
import { TransactionServiceService } from '../services/transaction-service.service';
import { transaction } from '../model/transactionModel';


@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent
 {

  public transactionlist:any;
  public transaction =new transaction();
  public transaction_id?:any;


  constructor(private svc:TransactionServiceService) { }

  ngOnInit() 
  {
    this.GetTransactions();
  }

  GetTransactions() 
  {
   this.svc.GetTransaction().subscribe(data => console.log(data));
  }
  

}
