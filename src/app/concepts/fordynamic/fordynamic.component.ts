import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fordynamic',
  templateUrl: './fordynamic.component.html',
  styleUrls: ['./fordynamic.component.css']
})
export class FordynamicComponent implements OnInit {
  public data: any;
  userName: any;
  constructor() { }

  public setModel(data?: any): void {
    this.data = data || {};
  }

  public getModel() {
    this.data = this.data || null;
    return this.data;
  }
  ngOnInit() {
    this.userName = this.data;
   }

   saveC() {
     this.data = this.userName;
   }
}
