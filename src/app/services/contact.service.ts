import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';//importar componenete para hacer peticiones http
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';//importar las variables de ambiente

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ContactService {

	env = environment.apiUrl;//importar rutas de apis relativas

	public jsonUrl = this.env + "/types/contactos";

	constructor(private http:Http) { }

	//createContact(hero: Hero):Observable<object[]> {
	    //return this.http.post(this.jsonUrl, contacto, httpOptions);
					    //.pipe(
					      //catchError( this.handleError('createContact', contacto) )
					    //);
	//}

}
