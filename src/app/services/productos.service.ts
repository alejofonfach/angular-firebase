import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto.interface';
import { resolve } from 'url';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando:boolean = true;
  productos:ProductoInterface[]= [];
  productosFiltrados:ProductoInterface[]= [];

  constructor( private http:HttpClient ) {

    this.cargarProductos();
   }

  private cargarProductos(){

    return new Promise( (resolve, reject) =>{

      this.http.get('https://html-angular-firebase.firebaseio.com/productos_idx.json')
          .subscribe( (data:ProductoInterface[]) =>{

            this.productos = data;
            this.cargando = false;
            resolve();
          });
    } );
  }

  getProducto(id:string){

    return this.http.get(`https://html-angular-firebase.firebaseio.com/productos/${ id }.json`);
  }

  buscarProducto( busqueda:string ){

    //hay que validar que el arreglo tenga la data cargada al momento de filtrar
    if(this.productos.length==0){
      //cargar productos
      this.cargarProductos().then( ()=>{
        //ejecucion luego de tener los productos cargados
        //aplicar filtro
        this.filtrarProductos( busqueda );
      } )
    }else{
      //aplicar filtro
      this.filtrarProductos( busqueda );
    }
  }

  private filtrarProductos( busqueda:string ){

    //console.log(this.productos);
    busqueda = busqueda.toLowerCase();

    //misma logica que las consultas en entity framework
    this.productosFiltrados = this.productos.filter( producto =>
      producto.categoria.toLowerCase().includes(busqueda) || producto.titulo.toLocaleLowerCase().includes(busqueda));
  }
}
