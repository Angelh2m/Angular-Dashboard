import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

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
