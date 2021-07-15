import { Component, OnInit, ViewChild } from '@angular/core';
import { FordynamicComponent } from '../fordynamic/fordynamic.component';
import { HostComponent } from '../host/host.component';
import { ViewCComponent } from '../view-c/view-c.component';
@Component({
  selector: 'app-dcloading',
  templateUrl: './dcloading.component.html',
  styleUrls: ['./dcloading.component.css']
})
export class DcloadingComponent implements OnInit {
  @ViewChild('viewC') viewC: ViewCComponent;
  public activeComponentType: any;
  componentMapper: Map<any, any> = new Map<any, any>([
    ['11', FordynamicComponent],
  ]);

  @ViewChild(HostComponent) cComponent: HostComponent;
  constructor() { }

  ngOnInit() {
    this.activeComponentType = { componentType: this.componentMapper.get('11'), data: 'CHETHAN'};
  }

  save(): void {
    this.viewC.saveC();
    alert(this.viewC.userName);
  }

}
