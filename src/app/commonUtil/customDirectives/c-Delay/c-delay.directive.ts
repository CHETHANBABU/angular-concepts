import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[cDelay]'
})
export class CDelayDirective {

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input() set cDelay(delay: number){
    this.viewContainer.clear();
    setTimeout(() =>
      { 
          this.viewContainer.createEmbeddedView(this.templateRef);
    }, delay);
  }

}
