import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-login-state',
  templateUrl: './login-state.component.html',
  styleUrls: ['./login-state.component.scss']
})
export class LoginStateComponent implements OnInit {

  constructor(private router: Router, private user: UserService) { }

  ngOnInit() {
  }

  handleLogin() {
    localStorage.removeItem("Token")
    this.user.isUserLoaded = false;
    console.warn("SIGNOUT");
    this.router.navigate(['/login'])
  }

}
