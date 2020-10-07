import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdownmenu]'
})
export class DropdownmenuDirective {  
  @HostBinding('class.open') flag = false;
  constructor(private elementRef: ElementRef) {   }

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.flag = this.elementRef.nativeElement.contains(event.target) ? !this.flag : false;
  }
}
