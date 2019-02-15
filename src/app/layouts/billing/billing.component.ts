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

    if (!this.User.loggedUser) {
      this.User.getUserProfile().subscribe(resp => {
        this.payment = resp.user.payments;
        console.warn(this.payment);
      })
    }

    if (this.User.loggedUser) {
      this.payment = this.User.loggedUser.user.payments
      console.warn(this.User.loggedUser);

    }

  }

}
