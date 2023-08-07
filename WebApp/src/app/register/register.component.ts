import { Component,OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { AccountService } from '../services/account.service';
import { AccountDetails } from '../model/AccountDetails';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  formdata = {name:"",email:"",password:"",mobile:"",address:"",account_number:""};
  submit=false;
  errorMessage="";
  loading=false;

  constructor(private auth:AuthService, private userService: UserService, private accountservice: AccountService, private router:Router) { }

  ngOnInit(): void {
    this.auth.canAuthenticate();
  }

  onSubmit(){

    var firstname = this.formdata.name.split(" ")[0];
    var lastname = this.formdata.name.split(" ")[1];

    var user = {email:this.formdata.email,firstname:firstname,lastname:lastname,password:this.formdata.password};

    this.userService.Register(user).subscribe(
        data=>{
            console.log(data);
            

           
            // var AccountDetails:AccountDetails = {account_no:this.formdata.account_number,name:this.formdata.name,balance:0,email:this.formdata.email};
            // this.accountservice.CreateAccount(AccountDetails).subscribe(
            //   data=>{
            //     console.log(data);
            //   });

            //task 1
            //this.accountservice.createAccount().subscribe();

        });

        var accNo = Number(this.formdata.account_number);
        this.accountservice.CreateAccount({account_no:accNo,name:this.formdata.name,balance:0,email:this.formdata.email}).subscribe(
          data=>{
            console.log(data);
          });

          alert("Register Successfully")

          this.router.navigate(['/Login']);


    //   this.loading=true;

    //   //call register service
    //   this.auth
    //   .register(this.formdata.name,this.formdata.email,this.formdata.password)
    //   .subscribe({
    //       next:data=>{
    //           //store token from response data
    //           this.auth.storeToken(data.idToken);
    //           console.log('Registered idtoken is '+data.idToken);
    //           this.auth.canAuthenticate();

    //       },
    //       error:data=>{
    //           if (data.error.error.message=="INVALID_EMAIL") {

    //               this.errorMessage = "Invalid Email!";

    //           } else if (data.error.error.message=="EMAIL_EXISTS") {

    //               this.errorMessage = "Already Email Exists!";

    //           }else{

    //               this.errorMessage = "Unknown error occured when creating this account!";
    //           }
    //       }
    //   }).add(()=>{
    //       this.loading =false;
    //       console.log('Register process completed!');
    //   })
  }
}
