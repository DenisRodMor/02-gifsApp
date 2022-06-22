import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {

  // Para limpiar el input luego de presionar enter
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement> ;

  buscar(){
    // console.log(this.txtBuscar);
   const valor =  this.txtBuscar.nativeElement.value;
   console.log(valor);
   this.txtBuscar.nativeElement.value= '';
  }

}
