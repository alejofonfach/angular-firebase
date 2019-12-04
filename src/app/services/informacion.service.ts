import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  //variable que contendra la data del JSON
  info: InfoPagina = {};
  cargada:boolean = false;
  equipo:any[]=[];

  constructor(private http:HttpClient) {

    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(){
    this.http.get('assets/data/info.pagina.json')
    .subscribe( (data:InfoPagina) =>{

      this.cargada = true;
      this.info = data;
    });
  }

  private cargarEquipo(){
    this.http.get('https://html-angular-firebase.firebaseio.com/equipo.json')
    .subscribe( (data:any[]) =>{

      this.equipo = data;
    });
  }
}
