import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';//importar componenete para hacer peticiones http
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CatsService {

  public jsonCats = "http://eldiablo.com.co/wp-json/wp/v2/categories";

  constructor(private http:Http) {}

  getCats():Observable<object[]> {
      return this.http
        .get(this.jsonCats)
        .map((res: Response) => res.json());
  }


}
