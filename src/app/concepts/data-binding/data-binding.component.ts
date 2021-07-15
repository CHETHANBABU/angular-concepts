import { Component, OnInit } from '@angular/core';
import { DROPDOWNDATA, SBCDATA1, SBCDATA2, GAUGEDATA1, GAUGEDATA2 } from '../../commonUtil/mock.data';
import { SharedService } from 'src/app/commonUtil/util/shared.service';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  stringInterpolation: string = "Please go through the code"
  propertyDisable: boolean = true;
  isSpecial: boolean = true;
  actionName: string = ":";
  inputKeyValue: string = "Input Value";
  eventBindingEx: string = "Event";
  twoWayBind: 'two-way';
  value = '';
  inputData = DROPDOWNDATA;
  stackBarInput: any;
  gaugeInput: any;
  constructor(private sharedService: SharedService) {
    setTimeout(()=>{
      this.propertyDisable = false;
      this.isSpecial = false;
    }, 1000)
   }

  ngOnInit() {
    this.stackBarInput = SBCDATA1;
    this.gaugeInput = GAUGEDATA1;
   }

  getStringData(){
    return this.stringInterpolation;
  }

  eventBinding(){
    return this.eventBindingEx = "Event Status Changed";
  }

  keyStrokes(event: Event){
    this.inputKeyValue = (<HTMLInputElement>event.target).value;
  }

  onEnter(value: string) { this.value = value; }
  
  dropDownValue(value){
    switch(value) {
      case 'sbc1' : this.stackBarInput = SBCDATA1;
      break;
      case 'sbc2' : this.stackBarInput = SBCDATA2;
      break;
      case 'gauge1' : this.gaugeInput = GAUGEDATA1;
      break;
      case 'gauge2' : this.gaugeInput = GAUGEDATA2;
      break;      
    }
  }
}
