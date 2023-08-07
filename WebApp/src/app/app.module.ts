import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClient,HttpClientModule}from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{ MatMenuModule }from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';


import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransactionServiceService } from './services/transaction-service.service';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddMoneyComponent } from './MoneyTransfer/add-money/add-money.component';
import { AccountServiceService } from './services/account-service.service';
import { SendMoneyComponent } from './MoneyTransfer/send-money/send-money.component';
import { FormComponent } from './form/form.component';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { PaybillComponent } from './paybill/paybill.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashBoardComponent,
    AboutUsComponent,
    AddMoneyComponent,
    SendMoneyComponent,
     FormComponent,
    PaybillComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AccountdetailsComponent,
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,FormsModule,
    MatMenuModule,ReactiveFormsModule,FormsModule,MatButtonModule,
    MatInputModule,
    MatDatepickerModule,MatNativeDateModule,
    MatCheckboxModule,MatSelectModule,HttpClientModule, MatFormFieldModule,MatCardModule,
    
  ],
  providers: [TransactionServiceService,AccountServiceService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
