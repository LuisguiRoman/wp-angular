import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';//importar componenete para hacer peticiones http
import { Router, ActivatedRoute, Params } from '@angular/router';//leer informacion de ruas dinamicas
import { ItemsPortfolioService } from '../../services/items-portfolio.service';//importar el servicio
import { Location } from '@angular/common';//volver en el historial

import { Title }     from '@angular/platform-browser';//servicio para etqueta title dynamica

import { environment } from '../../../environments/environment';//importar las variables de ambiente

declare var jquery:any;
declare var $:any;

@Component({
  selector: 'ed-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  env = environment.apiUrl;//importar rutas de apis relativas

  itemSelected:any;
  itemSlug:string;
  itemTags:string;

  constructor(
  	private http:Http,
  	private _location:Location, 
  	private ruta:ActivatedRoute,
    private titleService: Title,
  	private _service:ItemsPortfolioService 
  	) { }


  ngOnInit() {
    //params es un observable ( evento asyncrono )
    //obtener el slug de la url y desplegar la info de este item
  	this.ruta.params.subscribe( ( params ) => {
  		this.itemSlug = params['slug'];
      this.obtenerItem();
  	});
  }

  obtenerItem():void{
    //llamar a la variable http de arriba y hacer una peticion externa (request)
    //del servicio creado en php
    //subscribe para una respuesta o callback almacenada en la variable respuesta en formato Json
    this.http
    .request(this.env + '/posts?slug='+this.itemSlug)
    .subscribe( (respuesta:Response)=> {
      this.itemSelected = respuesta.json()[0]//almacenamos en la variable videos el json

      console.log(this.itemSelected);

      this.titleService.setTitle( this.itemSelected.title.rendered + ' - El Diablo' );

      this.getTags(this.itemSelected.tags);
    });
  }

  getTags(tags){
    this.http
    .request(this.env + '/tags?include='+tags)
    .subscribe( (respuesta:Response)=> {
      this.itemTags = respuesta.json()//almacenamos en la variable videos el json
    } );
  }


}

