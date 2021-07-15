import { Injectable } from '@angular/core';
import { Observable,Subject, from} from 'rxjs';
import { Message } from '../model/message';
import { Messagetype } from '../model/messagetype.enum';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageSource = new Subject<Message | Message[]>();

  messageObserver = this.messageSource.asObservable();

  private add(message: Message) {
      if (message) {
          this.messageSource.next(message);
      }
  }

  addMessage(message: string, type: Messagetype) {
      let context = new Message(message, type);
      this.add(context);
  }

  clearMessage() {
      this.messageSource.next(null);
  }
}
