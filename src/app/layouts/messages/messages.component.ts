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

  singleMessage = {
    created: "", email: "", files: [], lastUpdate: "", _id: "",
    desiredDoctor: "", question: "", reply: [], resolved: false, response: { date: "" }, userRef: ""
  }

  message: any;



  constructor(public User: UserService, private conversation: ConversationService) { }

  ngOnInit() {
    if (!this.User.loggedUser) {
      this.User.getUserProfile().subscribe(resp => {
        this.messages = resp.user.consultations
      })
    }

    if (this.User.loggedUser) {
      this.messages = this.User.loggedUser.user.consultations
    }

  }

  showMe(e) {
    // console.log(e);

    this.conversation.getConversation(e.id).subscribe(resp => {
      this.singleMessage = { ...resp[e.id].response }
      console.warn(this.singleMessage);
    })


    this.isActive = e.active;
  }

  onSubmit(f: NgForm) {

    let payload = {
      questionID: this.singleMessage._id,
      message: f.value.message,
      type: "USER_REPLY"
    }

    this.conversation.submitResponse(payload).subscribe(resp => {
      console.warn(resp);

    })

    // let payload = f.value;


  }

}
