import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  contador=0;

  increment(){
    this.contador++;
  }
  

  decrement(){
      this.contador--;
    }
}
