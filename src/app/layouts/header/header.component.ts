import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public user: UserService) { }

  userData: any;

  ngOnInit() {
    this.user.userData.subscribe(resp => {
      console.log(resp);
      this.userData = resp;
    })

  }

  // logOut() {
  //   console.log("REMOVE");
  //   localStorage.removeItem("Token")
  // }
}
