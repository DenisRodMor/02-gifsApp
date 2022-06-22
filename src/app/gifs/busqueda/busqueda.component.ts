import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {

  // Para limpiar el input luego de presionar enter
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement> ;

  constructor(private gifsservice: GifsService){

  }

  buscar(){
    // console.log(this.txtBuscar);
   const valor =  this.txtBuscar.nativeElement.value;
   this.gifsservice.buscarGifs(valor);
   this.txtBuscar.nativeElement.value= '';
  }

}
