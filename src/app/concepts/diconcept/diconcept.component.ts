import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../controls/message/service/message.service';
import { Messagetype } from '../../controls/message/model/messagetype.enum';
@Component({
  selector: 'app-diconcept',
  templateUrl: './diconcept.component.html',
  styleUrls: ['./diconcept.component.css']
})
export class DiconceptComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  sendMessage(): void {
    // send message to subscribers via observable subject
     this.messageService.addMessage('Success', Messagetype.Success);
  }
}
