import { Component, OnInit } from '@angular/core';
import { Dato } from './dato';
import { DatoService } from './dato.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {
  datos?:Dato[];

  constructor(private datoService: DatoService) { }

  ngOnInit(): void {
    this.datoService.getDatos().subscribe(
      datos => this.datos = datos
    );
  }
}