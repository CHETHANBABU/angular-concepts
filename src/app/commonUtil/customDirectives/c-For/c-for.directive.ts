import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[cFor]'
})
export class CForDirective {

  constructor( private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input() set cFor(data:number){
    for(var i=0; i< data; i++){
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

}
