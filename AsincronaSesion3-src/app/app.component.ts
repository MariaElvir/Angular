import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  suma: number =0;
  resultado="";
  operacion = '';
  numero1texto= ' Numero 1: ';
  numero2texto= ' Numero 1: ';

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  operacionMatematica(n1:any,n2:any){
    this.suma=parseInt(n1) + parseInt(n2);
    this.operacion= this.numero1texto+n1+ this.numero2texto+n2;
    this.resultado= String(this.suma);
  }
}
