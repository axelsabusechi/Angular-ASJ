import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  mostrar: boolean = true;
  redSocial: String [] = [
    'Instagram ',
    'Facebook ',
    'Twitter '
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
