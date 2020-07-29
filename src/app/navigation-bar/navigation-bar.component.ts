import { Component, OnInit } from '@angular/core';
import { GoogleAuthService } from '../Services/Auth/google-auth.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(private authService: GoogleAuthService) { }

  ngOnInit() {
  }
logout(){
this.authService.signOutOfAuthentication();
}
}
