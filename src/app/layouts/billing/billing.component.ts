import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  constructor(private User: UserService) { }
  payment: any;

  ngOnInit() {

    if (this.User.isUserLoaded) {
      console.log("FROM CACHE");
      return this.payment = this.User.loggedUser.user.payments
    }


    if (!this.User.isUserLoaded) {
      this.User.getUserProfile().subscribe(resp => {
        this.payment = resp.user.payments
      })
    }


  }

}
