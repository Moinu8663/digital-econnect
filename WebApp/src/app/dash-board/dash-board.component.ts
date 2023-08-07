import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  constructor(private accService: AccountService) { }

  public accountlist?:any;

  ngOnInit(): void {

    this.accService.GetAccount().subscribe(data=>
      {
        console.log(data);
        this.accountlist=data

        for(let i = 0; i < this.accountlist.length; i++)
        {
          if(this.accountlist[i].email == localStorage.getItem("email"))
          {
            localStorage.setItem("account_no", this.accountlist[i].account_No);
            break;
          }
        }
    });

   
  }

}
