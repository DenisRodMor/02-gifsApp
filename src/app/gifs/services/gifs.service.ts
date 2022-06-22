import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor() { }

  private _historial: string[]=[];

  get historial(){
    return [...this._historial];
  }

  buscarGifs(query : string = '' ){

    query = query.trim().toLocaleLowerCase();

    if(!this._historial.includes(query)){ //el signo de admiracion al inicio es para decir decir la negacion de esa condicion
      this._historial.unshift(query); //si no lo incluye ahi si lo debe insertar
    }

    this._historial = this._historial.splice(0,10);//para que unicamente muestre los 10 mas recientes en el historial

    console.log(this._historial);

  }


}
