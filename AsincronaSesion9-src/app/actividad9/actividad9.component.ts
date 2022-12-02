import { Component,OnInit } from '@angular/core';
import { Dato } from './actividad9';
import { Actividad9Service } from './actividad9.service';


@Component({
  selector: 'app-actividad9',
  templateUrl: './actividad9.component.html',
  styleUrls: ['./actividad9.component.css']
})
export class Actividad9Component implements OnInit {
  datos?:Dato[];

  constructor(private actividadService: Actividad9Service) { }

  ngOnInit(): void {
    this.actividadService.getDatos().subscribe(
      datos => this.datos = datos
    );
  }
 
}