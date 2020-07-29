import { HttpIntercepterBasicAuthService } from './../Services/Auth/http-intercepter-basic-auth.service';
import { ExpensesModel } from './../Models/ExpensesModel';
import { WelcomeService } from './../Services/Data/welcome.service';
import { Component, OnInit } from '@angular/core';
import { GettingExpensesService } from '../Services/Data/getting-expenses.service';
import { Router } from '@angular/router';
import { GoogleAuthService } from '../Services/Auth/google-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  responseFromWelcomeService: any;
  responseFromExpensesService: any;
  loginId: string;
  password: string;
  varForCreateNewUser: boolean = false;
  newUserloginId: string;
  newUserpassword: string;
  newUserReEnterPassword: string='';
  expensesModelObject: ExpensesModel;
  loginerror: string = '';
  createNewUserError: string='';
  newUserLoginIdError: string='';
  regex = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&]).{8,}');
  regexNewUserID= new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  constructor(private welcomeservice: WelcomeService, private gettingExpensesService: GettingExpensesService, private httpIntercepterService: HttpIntercepterBasicAuthService, private route: Router, private authService: GoogleAuthService) {
    this.authService.getEmailSignInState().subscribe(data => {
      if (data != null) {
        this.loginerror = data;
        if (this.loginerror == 'Successfully LoggedIn') {
          // this.route.navigate(["/expenses"]);
          console.log("logged IN");
        }
      }
    });
    this.authService.getCreateNewUserState().subscribe(data=>{
      if(data!=null){
        this.createNewUserError=data;
        if(this.createNewUserError=='Successfully Created User'){
          //here we can navigate
          console.log('Created User');
        }
      }
    })
  }
  getDataFromWelcomeService() {
    // this.welcomeservice.setDataFromHelloWorldAPI(this.loginId);
    // this.welcomeservice.getDataFromHelloWorldAPI().subscribe(data=>{
    //   if(data!=null){
    //   this.responseFromWelcomeService=data;
    //   }
    // })
    // console.log(this.responseFromWelcomeService);
    this.gettingExpensesService.setExpensesFromURL(this.loginId);
    this.route.navigate(["/expenses"]);
    this.gettingExpensesService.getExpensesFromAPI().subscribe(data => {
      if (data != null) {
        this.responseFromExpensesService = data;
      }
    });
  }
  ngOnInit() {
  }
  createNewUserClicked() {
    this.varForCreateNewUser = true;
    // let el=document.getElementById("newUserCard");
    // el.scrollIntoView();
    //window.scrollTo(0,document.querySelector(".newUserCard").scrollHeight);

  }
  googleLogin() {
    this.authService.googleSignIn();
  }
  login(email, password) {
    this.authService.emailSignIn(email, password);
  }
  createNewUser(loginId, password, reEnterPassword) {
      this.authService.createNewUser(loginId, password);
      this.newUserloginId = null;
      this.newUserpassword = null;
      this.newUserReEnterPassword = '';
      // if(this.createNewUserError==''){
      // this.varForCreateNewUser = false;
      // }

  }
  cancelCreateNewUser(){
    this.varForCreateNewUser = false;
  }


}
