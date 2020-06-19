import { Directive, Input, TemplateRef, ViewContainerRef, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMiDirectiva]'
})
export class MiDirectivaDirective {

    constructor(private el: ElementRef) { }

    @Input('appMiDirectiva') color: boolean;
  
    @HostListener('mouseenter') onMouseEnter() {
      if(this.color){
        this.highlight( 'pink' );
      }
    }
  
    @HostListener('mouseleave') onMouseLeave() {
      this.highlight(null);
    }
  
    private highlight(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
    }
}
