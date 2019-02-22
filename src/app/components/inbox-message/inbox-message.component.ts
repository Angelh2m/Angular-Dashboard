import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ConversationService } from '../../services/Conversation/conversation.service';

@Component({
  selector: 'app-inbox-message',
  templateUrl: './inbox-message.component.html',
  styleUrls: ['./inbox-message.component.scss']
})
export class InboxMessageComponent implements OnInit {

  @Input('data') data: any;
  @Output() active = new EventEmitter();
  // @Output() open: EventEmitter<any> = new EventEmitter();
  activeCard: any;
  onMobile = 'msg__inbox';
  isTrue = false;

  constructor() { }

  ngOnInit() { }

  activateCard(id) {
    this.activeCard = Number(id);
    this.isTrue ? this.onMobile = "msg__inbox" : this.onMobile = "msg__inbox hide"
    this.isTrue = !this.isTrue;
    this.active.emit({ active: this.isTrue, id });
    // console.warn(this.isTrue, id);
  }

}
