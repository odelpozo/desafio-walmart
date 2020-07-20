import { Component, OnInit } from '@angular/core';
import { ProductosService } from "../../services/productos.service";
import { Producto } from "../../models/Producto";


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  productos: Producto[];
  criterio = "";
  isError = false;
  constructor(public productosService: ProductosService) { }
  
  ngOnInit() {
    this.productosService.get("products").subscribe(response => {
      this.productos = response.data;
      console.log('listaProductos',this.productos)
      this.isError = false;

    }, err =>{
      this.isError = true;
      this.productos = [];
      console.log('ERROR ==>>>', err)
    });
  }

 

}
