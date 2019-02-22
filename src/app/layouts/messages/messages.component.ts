import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { ConversationService } from '../../services/Conversation/conversation.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  isActive: boolean = false;

  messages = [
    {
      time: "22t July 2019",
      question: "Hello this is a question ONE",
      doctor: "Dr. James smith",
      specialty: "Othopedist",
      excerpt: "`Lorem, ipsum dolor sit amet consectetur"
    },
  ]

  singleMessage: any = {
    created: "", email: "", files: [], lastUpdate: "", _id: "",
    desiredDoctor: "", question: "", reply: [], resolved: false, response: { date: "" }, userRef: ""
  }

  message: any;

  successMessage: any;



  constructor(public User: UserService, private conversation: ConversationService) { }

  ngOnInit() {
    console.warn(this.User.isUserLoaded);

    if (this.User.isUserLoaded) {
      console.warn("MESSAGES", this.User.loggedUser);
      return this.messages = this.User.loggedUser.user.consultations
    }

    this.User.getUserProfile().subscribe(resp => {
      console.warn("MESSAGES", resp);

      this.messages = [...resp.user.consultations]
    })

  }

  showMe(e) {
    this.conversation.getConversation(e.id).subscribe(resp => {
      console.warn(resp);
      this.successMessage = "";

      this.singleMessage = { ...resp[e.id].response }
    })
    this.isActive = e.active;
  }

  onReply(f: NgForm) {

    let payload = {
      questionID: this.singleMessage._id,
      message: f.value.message,
      type: "USER_REPLY"
    }

    // return console.log(this.User.loggedUser.user.consultations)
    this.conversation.submitResponse(payload).subscribe((resp: any) => {
      console.warn(resp);
      this.successMessage = "Message sent";
      // this.singleMessage = { ...resp.response }
    })
  }

}
