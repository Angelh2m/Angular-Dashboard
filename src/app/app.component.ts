import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-health';
  isUserLoggedIn = false;

  constructor(public router: Router, private user: UserService) {

  }

  ngOnInit() {
    let token = localStorage.getItem("Token")
    this.isUserLoggedIn = token ? true : false
    this.user.userToken.subscribe(resp => {
      this.isUserLoggedIn = resp.token ? true : false
      this.router.navigate(['/']);
    })
  }




}
