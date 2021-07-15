import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipeconcept',
  templateUrl: './pipeconcept.component.html',
  styleUrls: ['./pipeconcept.component.css']
})
export class PipeconceptComponent implements OnInit {
  birthday = new Date(1988, 3, 15); 
  power = 5;
  factor = 1;
  splitText: string = '22:29';
  to: string = "";
  expr: any = ':';
  arg: number = 2;
  script: string = 'split';

  constructor() { }

  ngOnInit() {
  }

  get formatfullDate() { return 'fullDate'; }
  get formatshortDate() { return 'shortDate'; }

 
}
