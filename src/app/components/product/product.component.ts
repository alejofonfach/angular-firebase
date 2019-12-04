import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoCompleto } from 'src/app/interfaces/producto-completo.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {

  producto:ProductoCompleto;
  productoId:string;

  constructor( private route:ActivatedRoute, 
               public productoService:ProductosService ) { }

  ngOnInit() {

    this.route.params
      .subscribe( parametros =>{
        //ocupamos la respuesta de parametros para buscar un producto en el getProducto( id )
        this.productoService.getProducto(parametros['id'])
          .subscribe( (producto:ProductoCompleto) =>{

            this.productoId = parametros['id'];
            this.producto = producto;

          });
      });
  }

}
