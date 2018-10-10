import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';//importar componenete para hacer peticiones http
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ItemsPortfolioService {

  public jsonUrl = "/wp-json/wp/v2/posts";

  constructor(private http:Http) { }

  getPortfolio():Observable<object[]> {
      return this.http
        .get(this.jsonUrl)
        .map((res: Response) => res.json());
  }

}
