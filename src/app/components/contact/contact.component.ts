import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';//servicio para etqueta title dynamica

import { NgForm } from '@angular/forms';//modulo para control de formularios

import { Router, ActivatedRoute, Params } from '@angular/router';//leer informacion de ruas dinamicas
import { ContactService } from '../../services/contact.service';//importar el servicio
import { environment } from '../../../environments/environment';//importar las variables de ambiente

import { Http, Response, Headers, RequestOptions } from '@angular/http';//importar componenete para hacer peticiones http

let httpOptions = {
  headers: new Headers({
    'Content-Type':  'application/json',
    'Authorization': 'g0Y2uVrK1ZzmOV9wBDHmnemaZBgTzFVXxkwYkrID'
  })
}

@Component({
  selector: 'ed-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  env = environment.apiUrl;//importar rutas de apis relativas
  public jsonUrl = this.env + "/types/contactos";

  constructor(
  	private titleService: Title,
  	private http:Http
  	//private _contactService:ContactService 
  	) { }

  ngOnInit() {
  	this.titleService.setTitle( 'Contacto -  El Diablo' );
  }

  contactForm(formulario:NgForm){

  	let msmBody = {
  		'title': formulario.value.email,
  		'content': `<strong>Nombre:</strong>, ${formulario.value.nombre} <br/>
  		            <strong>Email:</strong>, ${formulario.value.nombre} <br/>
  		            <strong>Asunto:</strong>, ${formulario.value.asunto} <br/>
  		            <strong>Mensaje:</strong>,<br/> ${formulario.value.mensaje}`
  	};

  	this.http.post(this.jsonUrl, msmBody, httpOptions)
  	.subscribe( resp => ( console.log(resp) ) );

  	//this._contactService.createContact(formulario.value)
  	                    //.subscribe( hero => this.heroes.push(formulario.value) );
  };

}
