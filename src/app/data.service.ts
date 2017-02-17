import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataService {

  productosSeleccionados : any[] = []; 

  constructor(private http : Http) { }

  getProductos(){
    return this.http.get('https://back-end-tienda.firebaseio.com/productos/.json')
      .map((response : Response) => response.json());
  }

  getUsuarios(){
    return this.http.get('https://back-end-tienda.firebaseio.com/usuarios/.json')
      .map((response : Response) => response.json());
  }

  addCarrito(pedido){
    this.productosSeleccionados.push(pedido);
  }

}
