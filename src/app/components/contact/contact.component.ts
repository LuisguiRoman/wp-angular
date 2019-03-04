import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';//servicio para etqueta title dynamica

import { NgForm } from '@angular/forms';//modulo para control de formularios

import { Http, Response } from '@angular/http';//importar componenete para hacer peticiones http
import { Router, ActivatedRoute, Params } from '@angular/router';//leer informacion de ruas dinamicas
import { ContactService } from '../../services/contact.service';//importar el servicio
import { environment } from '../../../environments/environment';//importar las variables de ambiente

@Component({
  selector: 'ed-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
  	private titleService: Title,
  	private http:Http,
  	//private _contactService:ContactService 
  	) { }

  ngOnInit() {
  	this.titleService.setTitle( 'Contacto -  El Diablo' );
  }

  contactForm(formulario:NgForm){
  	console.log(formulario.value);

  	let msmBody = {
  		'title': formulario.value.email,
  		'content': `<strong>Nombre:</strong>, ${formulario.value.nombre} <br/>
  		            <strong>Email:</strong>, ${formulario.value.nombre} <br/>
  		            <strong>Asunto:</strong>, ${formulario.value.asunto} <br/>
  		            <strong>Mensaje:</strong>,<br/> ${formulario.value.mensaje}`
  	};

  	this.http.post('http://eldiablo.com.co/wp-json/wp/v2/posts', msmBody)
  	         .subscribe( resp => ( console.log(resp) ) );

  	//this._contactService.createContact(formulario.value)
  	                    //.subscribe( hero => this.heroes.push(formulario.value) );
  };

}
