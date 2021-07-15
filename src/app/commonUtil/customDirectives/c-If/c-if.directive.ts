import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[cIf]'
})
export class CIfDirective {

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input() set cIf(condition: boolean){
    if (condition) {
      //To add host element in DOM layout, we need to call createEmbeddedView() method of ViewContainerRef
		  this.viewContainer.createEmbeddedView(this.templateRef);
	   } else {
       //we want to clear view container, call clear() method of ViewContainerRef
		  this.viewContainer.clear();
	  }
  }

}
