import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  dataEntrada=[
    {image:"https://fraseshoy.org/wp-content/uploads/2019/09/29e34c1ff0534f8153e3a3ba2bdceb78.jpg",
    title:"Hola",
    subtitule:"Como estas?"
  },{image:"https://fraseshoy.org/wp-content/uploads/2019/09/29e34c1ff05348153e3a3ba2bdceb78.jpg",
  title:"Hola",
  subtitule:"Como estas?"
},{image:"https://fraseshoy.org/wp-content/uploads/2019/09/29e34c1ff0534f8153e3a3ba2bdceb78.jpg",
title:"Hola",
subtitule:"Como estas?"
}

  ]
}
