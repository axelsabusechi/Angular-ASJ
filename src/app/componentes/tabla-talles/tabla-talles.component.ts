import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-talles',
  templateUrl: './tabla-talles.component.html',
  styleUrls: ['./tabla-talles.component.css']
})
export class TablaTallesComponent implements OnInit {

  talle = {
    medidaPie: '',
    ar: '',
    uk: '',
    eur: '',
    usHombre: '',
    usMujer: ''
  }

  talles: Array<any> = [
    {medidapie: '22.1 cm', ar: '34.5 cm', uk: '3.5 cm', eur: '35.5 cm', usHombre: '4 cm', usMujer: '5 cm'},
    {medidapie: '22.9 cm', ar: '36 cm', uk: '4.5 cm', eur: '37 cm', usHombre: '5 cm', usMujer: '6 cm'},
    {medidapie: '23.3 cm', ar: '36.5 cm', uk: '5 cm', eur: '37.5 cm', usHombre: '5.5 cm', usMujer: '6.5 cm'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
