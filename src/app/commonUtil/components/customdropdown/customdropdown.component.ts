import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'customdropdown',
  templateUrl: './customdropdown.component.html',
  styleUrls: ['./customdropdown.component.css']
})
export class CustomdropdownComponent implements OnInit {
  @Input() sendData: any[];
  @Output() emitDropValue = new EventEmitter();

  option: any[];
  constructor() { }

  ngOnInit() {
    this.option = this.sendData;
  }

  selectDropDown(dataEvent){
    this.emitDropValue.emit(dataEvent.value.code);
  }

}
