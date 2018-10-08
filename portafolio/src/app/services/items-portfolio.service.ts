import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';//importar componenete para hacer peticiones http
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ItemsPortfolioService {

  public jsonUrl = "/wp-json/wp/v2/posts";

  constructor(private http:Http) { }

  getPortfolio():Observable<object[]> {
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    headers.append('Access-Control-Allow-Origin', '*');
    let options = new RequestOptions({headers: headers});

      return this.http
        .get(this.jsonUrl, options)
        .map((res: Response) => res.json());
  }

}
