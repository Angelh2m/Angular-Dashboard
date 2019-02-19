import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any = {
    email: "",
    password: ""
  }
  constructor(private User: UserService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.warn(f.value);
    this.User.login(f.value).subscribe(resp => {
      console.warn(resp);

    })

  }
}
