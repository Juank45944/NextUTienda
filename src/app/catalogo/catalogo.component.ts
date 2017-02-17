import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Producto } from '../Producto';

@Component({
  selector: 'catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  productos : Producto[];
  buscar : string;

  constructor(private data : DataService) { }

  ngOnInit() {
    this.buscar = '';
    this.data.getProductos()
      .subscribe(
        (data) => this.productos = data
      ) 
  }

  onAddCarrito(nombre, cantidad){
    let pedido = { nombre: nombre, cantidad: cantidad };
    this.data.addCarrito(pedido);
  }

}
