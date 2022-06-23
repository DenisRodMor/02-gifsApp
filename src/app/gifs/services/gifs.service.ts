import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {


  private apikey: string = 'L0skS4P4ZsfqLII7u9wtgLe6FBQqbzir';
  private _historial: string[]=[];


  //TODO: Cambiar any por su tipo
  public resultados: any[]=[];

  get historial(){
    return [...this._historial];
  }

  constructor(private http : HttpClient){}

  buscarGifs(query : string = '' ){

    query = query.trim().toLocaleLowerCase();

    if(!this._historial.includes(query)){ //el signo de admiracion al inicio es para decir decir la negacion de esa condicion
      this._historial.unshift(query); //si no lo incluye ahi si lo debe insertar
      this._historial = this._historial.splice(0,10);//para que unicamente muestre los 10 mas recientes en el historial
    }

    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=L0skS4P4ZsfqLII7u9wtgLe6FBQqbzir&q=${ query }&limit =10`)
      .subscribe((resp:any) => {
        console.log(resp.data);
        this.resultados = resp.data;
      });


  }


}
