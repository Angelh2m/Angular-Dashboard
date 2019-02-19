import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class IsUserRegisteredGuard implements CanActivate {

  constructor(public router: Router, private User: UserService) { }

  canActivate() {

    let token = localStorage.getItem('Token');

    if (token) { return true }

    if (!token) {
      this.router.navigate(['/login']);
      return false
    }

  }
}
