import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[betterHighlight]'
})
export class BetterhighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @Input('betterHighlight') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter(eventData: Event) {
    this.highlight(this.highlightColor || 'red', 'white');
  }

  @HostListener('mouseleave') onMouseLeave(eventData: Event) {
    this.highlight(null, 'black');
  }

  private highlight(color: string, fontColor: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color, );
    this.renderer.setStyle(this.el.nativeElement, 'color', fontColor, );
  }

}
