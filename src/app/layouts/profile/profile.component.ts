import { Component, OnInit } from '@angular/core';
import { ConversationService } from '../../services/Conversation/conversation.service';
import { UserService } from 'src/app/services/user/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private User: UserService, private Consultation: ConversationService) { }
  profile: any;
  formStatus: any;
  model: any = { question: "Hello from Angular", doctor: "Python", details: "Hello! " }

  ngOnInit() {

    if (!this.User.loggedUser) {
      this.User.getUserProfile().subscribe(resp => {
        this.profile = resp
      })
    }

    if (this.User.loggedUser) {
      this.profile = this.User.loggedUser
    }

  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    let payload = f.value;
    this.Consultation.submitQuestion(payload).subscribe((resp: any) => {

      if (resp) {
        this.model = { question: "", doctor: "", details: "" }
        this.formStatus = "summited";
      }
    },
      err => {
        console.warn(err.error.message);
        this.formStatus = "error";
      })

  }

}
