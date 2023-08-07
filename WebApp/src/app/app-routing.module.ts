import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { AddMoneyComponent } from './MoneyTransfer/add-money/add-money.component';
import { SendMoneyComponent } from './MoneyTransfer/send-money/send-money.component';
import { FormComponent } from './form/form.component';
import { PaybillComponent } from './paybill/paybill.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';


const routes: Routes = [
{path:'',component:HomeComponent},
{path:'Accountdetails',component:AccountdetailsComponent},
{path:'Login',component:LoginComponent},
{path:'Register',component:RegisterComponent},
{path :'Home',component:HomeComponent},
{ path: 'Transactions', component:TransactionHistoryComponent },
{path:'Dashboard',component:DashBoardComponent},
{path:'About',component:AboutUsComponent},
{path:'AddMoney',component:AddMoneyComponent},
{path:'Sendmoney',component:SendMoneyComponent},
{path:'Profile',component:FormComponent},
{path :'paybill',component:PaybillComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
