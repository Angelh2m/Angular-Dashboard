import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  isActive: boolean = false;


  inbox = [
    {
      time: "22t July 2019",
      question: "Hello this is a question ONE",
      doctor: "Dr. James smith",
      specialty: "Othopedist",
      excerpt: "`Lorem, ipsum dolor sit amet consectetur"
    },
    {
      time: "22t July 2019",
      question: "Hello this is a question TWO",
      doctor: "Dr. James smith",
      specialty: "Othopedist",
      excerpt: "`Lorem, ipsum dolor sit amet consectetur"
    },
    {
      time: "22t July 2019",
      question: "Hello this is a question TWO",
      doctor: "Dr. James smith",
      specialty: "Othopedist",
      excerpt: "`Lorem, ipsum dolor sit amet consectetur"
    },
    {
      time: "22t July 2019",
      question: "Hello this is a question TWO",
      doctor: "Dr. James smith",
      specialty: "Othopedist",
      excerpt: "`Lorem, ipsum dolor sit amet consectetur"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  showMe(e) {
    this.isActive = e.active;
  }

}
