import { Component, OnInit, ViewChild, Input, OnChanges } from '@angular/core';
import { HostdDirective } from '../directives/hostd.directive';
@Component({
  selector: 'c-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit, OnChanges {
@ViewChild(HostdDirective) host: HostdDirective;
@Input() dataComponent: any;
component: any;

  constructor() { }

  ngOnInit() {
    this.initializeComponent();
  }

  ngOnChanges() {
    this.initializeComponent();
  }
  getComponentData(){
    if(this.component){
      return this.component.getModel()
    }else{
      return  null
    }
    
  }
  private initializeComponent(): void {
    this.component = this.host.loadComponent(this.dataComponent.componentType);
    if (this.component) {
      this.component.setModel(this.dataComponent.data);
    }
  }

}
