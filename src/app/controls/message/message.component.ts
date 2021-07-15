import { Component, OnInit, ViewChild, ElementRef, Input, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../message/service/message.service';
import { Message } from '../message/model/message';
import { DomhandlerService } from '../common/domhandler.service';
@Component({
  selector: 'c-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @ViewChild('container') containerViewChild: ElementRef;
  @Input() life: number = 1000;
  subscription: Subscription;
  _value: Message[];
  @Input() immutable: boolean = true;
  timeout: any;

  constructor(public messageService: MessageService, private render: Renderer2) {
    if (messageService) {
      this.subscription = messageService.messageObserver.subscribe(messages => {
        if (messages) {
          if (messages instanceof Array) {
            this.value = [...messages]; //this.value ? [...this.value, ...messages] : [...messages];
          }
          else {
            this.value = [messages]; // show only one message at a time //this.value ? [...this.value, ...[messages]] : [messages];
          }
        }
        else {
          this.value = null;
        }
      });
    }
  }

  @Input() get value(): Message[] {
    return this._value;
  }

  ngAfterViewInit(): void {
    this.initTimeout();
  }

  set value(val: Message[]) {
    this._value = val;
    if (this.containerViewChild && this.containerViewChild.nativeElement && this.immutable) {
      this.handleValueChange();
    }
  }

  ngOnInit() {
  }

  handleValueChange() {
    this.render.addClass(this.containerViewChild.nativeElement, 'fadeInRight');
    this.initTimeout();
  }

  initTimeout() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.removeAll();
    }, this.life);
  } 

  removeAll() {
    if (this.value && this.value.length) {

      this.render.removeClass(this.containerViewChild.nativeElement, 'fadeInRight');
      setTimeout(() => {
        if (this.immutable) {
          this.value = [];
        }
        else {
          this.value.splice(0, this.value.length);
        }
      }, 2000);
    }
  }

  ngOnDestroy() {
    clearTimeout(this.timeout);

    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
