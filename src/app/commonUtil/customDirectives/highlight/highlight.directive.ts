import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }
   @HostListener('mouseenter') onMouseEnter(eventData: Event) {
    this.highlight('yellow');
  }
  
  @HostListener('mouseleave') onMouseLeave(eventData: Event) {
    this.highlight(null);
  }
  
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
