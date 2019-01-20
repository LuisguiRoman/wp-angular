import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';//importar componenete para hacer peticiones http
import { Router, ActivatedRoute, Params } from '@angular/router';//leer informacion de ruas dinamicas
import { ItemsPortfolioService } from '../../services/items-portfolio.service';//importar el servicio
import { Location } from '@angular/common';//volver en el historial

declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  itemSelected:any;
  itemSlug:string;
  itemTags:string;

  constructor(
  	private http:Http,
  	private _location:Location, 
  	private ruta:ActivatedRoute, 
  	private _service:ItemsPortfolioService 
  	) { }

  ngOnInit() {
    //params es un observable ( evento asyncrono )
    //obtener el slug de la url y desplegar la info de este item
  	this.ruta.params.subscribe( ( params ) => {
  		this.itemSlug = params['slug'];
      this.obtenerItem();
  	});

    this.wow();

  }

  obtenerItem():void{
    //llamar a la variable http de arriba y hacer una peticion externa (request)
    //del servicio creado en php
    //subscribe para una respuesta o callback almacenada en la variable respuesta en formato Json
    this.http
    .request('http://eldiablo.com.co/wp-json/wp/v2/posts?slug='+this.itemSlug)
    .subscribe( (respuesta:Response)=> {
      this.itemSelected = respuesta.json()[0]//almacenamos en la variable videos el json
      this.getTags(this.itemSelected.tags);
    } );
  }

  getTags(tags){
    this.http
    .request('http://eldiablo.com.co/wp-json/wp/v2/tags?include='+tags)
    .subscribe( (respuesta:Response)=> {
      this.itemTags = respuesta.json()//almacenamos en la variable videos el json
    } );
  }

  wow(){
    
  }


}

