import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[dynamicHighlight]'
})
export class DynamichighlightDirective {
  constructor(private el: ElementRef) { }

  @Input('dynamicHighlight') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter(eventData: Event) {
    this.highlight(this.highlightColor || 'red', 'white');
  }

  @HostListener('mouseleave') onMouseLeave(eventData: Event) {
    this.highlight(null, 'black');
  }

  private highlight(color: string, fontColor: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.color = fontColor;
  }

}
