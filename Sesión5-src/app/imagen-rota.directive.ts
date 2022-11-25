import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appImagenRota]'
})
export class ImagenRotaDirective {
  @Input()  urlCustom: string="";
  constructor(private elementRef: ElementRef) { }
  
  @HostListener('error')
  cargarImagenPorDefecto(){
    const element =this.elementRef.nativeElement;
    element.src = this.urlCustom || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW_j3ye88krD2p9HH-OR_5q-Xr3l7EUVPbHCCxjps&s';
  }
   

  }
