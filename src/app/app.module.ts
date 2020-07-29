import { GoogleAuthService } from './Services/Auth/google-auth.service';
import { HttpIntercepterBasicAuthService } from './Services/Auth/http-intercepter-basic-auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { WelcomeService } from './Services/Data/welcome.service';
import { ExpensesListComponent } from './expenses-list/expenses-list.component';
import {MatTableModule} from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import{AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from "@angular/fire/auth";
@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    LoginComponent,
    ExpensesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      {path:'',component:LoginComponent},
      { path:'expenses',component:ExpensesListComponent }
    ])
  ],
  providers: [,{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpIntercepterBasicAuthService,
    multi: true
  },WelcomeService,GoogleAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
