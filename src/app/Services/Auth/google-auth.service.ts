import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase";
import { AngularFirestore } from "@angular/fire/firestore";
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {
  emailSignInErrorMessage:string='';
  emailSignInErrorCode:BehaviorSubject<any>=new BehaviorSubject(null);
  createUserErrorCode: BehaviorSubject<any>=new BehaviorSubject(null);
  constructor(private afAuth: AngularFireAuth) { }
  async googleSignIn() {
    const provider = new auth.GoogleAuthProvider();
    const credentials = await this.afAuth.signInWithPopup(provider);
    console.log(credentials.user.email);
  }
  createNewUser(email,password){
    this.afAuth.createUserWithEmailAndPassword(email, password).then(data=>{
      this.createUserErrorCode.next("Successfully Created User");
    }).catch(error=>{
      // Handle Errors here.
      this.createUserErrorCode.next(error.code);
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // console.log(errorMessage);


      // ...
    });
  }
  getCreateNewUserState(){
    return this.createUserErrorCode.asObservable();
  }
  emailSignIn(email,password):any{
     this.afAuth.signInWithEmailAndPassword(email,password).then(data=>{
      this.emailSignInErrorCode.next("Successfully LoggedIn");
     }

     ).catch(error=>{
      this.emailSignInErrorCode.next(error.code);
     });
}
getEmailSignInState(){
  return this.emailSignInErrorCode.asObservable();
}
signOutOfAuthentication(){
auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});
}
}
