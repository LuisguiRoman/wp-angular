import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';//importar componenete para hacer peticiones http
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CatsService {

  public jsonCats = "http://eldiablo.com.co/wp-json/wp/v2/categories";

  constructor(private http:Http) {}

  getCats():Observable<object[]> {
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	headers.append('Access-Control-Allow-Methods', 'HEAD, GET, POST, PUT, PATCH, DELETE');
    headers.append('Access-Control-Allow-Origin', '*');
    let options = new RequestOptions({headers: headers});

      return this.http
        .get(this.jsonCats, options)
        .map((res: Response) => res.json());
  }


}
