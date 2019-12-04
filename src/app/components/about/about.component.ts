import { Component, OnInit } from '@angular/core';
import { InformacionService } from 'src/app/services/informacion.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  constructor( public _infoService: InformacionService ) { }

  ngOnInit() {
  }

}
