import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {


  private apikey      : string    = 'L0skS4P4ZsfqLII7u9wtgLe6FBQqbzir';
  private servicioUrl : string    = 'https://api.giphy.com/v1/gifs'
  private _historial  : string[]  =  [];



  public resultados: Gif[]=[];

  get historial(){
    return [...this._historial];
  }

  constructor(private http : HttpClient){

    this._historial = JSON.parse(localStorage.getItem('historial')!) || []

    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || []

    // Esta manera y la de arriba, ambas sirven para que muestre el historial de busqueda que esta en el localstorage
    // if( localStorage.getItem('historial')){
    //   this._historial = JSON.parse(localStorage.getItem('historial')!);
    // }
  }

  buscarGifs(query : string = '' ){

    query = query.trim().toLocaleLowerCase();

    if(!this._historial.includes(query)){ //el signo de admiracion al inicio es para decir decir la negacion de esa condicion
      this._historial.unshift(query); //si no lo incluye ahi si lo debe insertar
      this._historial = this._historial.splice(0,10);//para que unicamente muestre los 10 mas recientes en el historial

      localStorage.setItem('historial', JSON.stringify(this._historial));



    }

    const params = new HttpParams() // estos parametros vienen de los que da la Url de PostMan -----> //https://api.giphy.com/v1/gifs/search?api_key=L0skS4P4ZsfqLII7u9wtgLe6FBQqbzir&q=dragon ball z&limit =10
                                    .set('api_key', this.apikey )
                                    .set('limit', '10')
                                    .set('q', query );




    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, {params} )
      .subscribe((resp ) => {
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });


  }


}
