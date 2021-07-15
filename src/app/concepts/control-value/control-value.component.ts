import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-value',
  templateUrl: './control-value.component.html',
  styleUrls: ['./control-value.component.css']
})
export class ControlValueComponent implements OnInit {
  list = [];

  constructor() { }

  ngOnInit() {
    this.list = [{id:1,display:'shahid'},{id:2,display:'akram'},{id:3,display:'zia'},{id:4,display:'wasem'},{id:5,display:'Fahad'},{id:6,display:'Mustafa'},{id:7,display:'Ahmad'},{id:8,display:'Hamid'},
    {id:9,display:'atif'},{id:10,display:'hassan'},{id:11,display:'ullah'},{id:12,display:'kareem'},{id:13,display:'faizan'},{id:14,display:'zahoor'},{id:15,display:'shohib'},{id:16,display:'bilal'}];
  }

}
