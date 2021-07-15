import { Directive, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Directive({
  selector: '[cHostd]'
})
export class HostdDirective {

  constructor(private viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) { }

  public loadComponent(componentType: any): any {
    this.viewContainerRef.clear();
    if (componentType) {
      let component = this.viewContainerRef.createComponent(this.componentFactoryResolver.resolveComponentFactory(componentType));
      return component.instance;
    }
  }

}
