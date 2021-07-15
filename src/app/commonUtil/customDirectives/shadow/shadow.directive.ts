import {  Directive, ElementRef, Input, Renderer2, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective implements OnInit, OnChanges {
  @Input() appShadow: string;
  @Input() appShadowX: string;
  @Input() appShadowY: string;
  @Input() appShadowBlur: string;
  @Input() inputto: any;
  @Output() afterinp = new EventEmitter<boolean>();
  constructor(private elem: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
      const shadowStr = `${ this.appShadowX } ${ this.appShadowY } ${ this.appShadowBlur } ${ this.appShadow }`;
      this.renderer.setStyle(this.elem.nativeElement, 'box-shadow', shadowStr);
    }

    ngOnChanges(): void {
      (this.inputto.keyCode === 32) ? this.afterinp.emit(true) : this.afterinp.emit(false);
    }

}
