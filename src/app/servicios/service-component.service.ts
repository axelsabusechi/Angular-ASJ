import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceComponentService {

  nombres:Array<string> = [

  ]

  constructor() { }

  addNombre(nombre:string) {
    // console.log('Agregar');
    this.nombres.push(nombre);
  }

  deleteNombre(){
    // console.log('Eiminar')
    this.nombres.pop();
  }

  getAll(){
    return this.nombres;
  }


}

