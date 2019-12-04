import { Component } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(public _if:InformacionService, private router:Router){}

  buscarProducto( busqueda:string ){

    if(busqueda.length ==0){
      return;
    }

    this.router.navigate(['/search', busqueda]);
    
  }
}
