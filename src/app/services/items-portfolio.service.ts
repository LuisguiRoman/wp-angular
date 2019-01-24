import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';//importar componenete para hacer peticiones http
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';//importar las variables de ambiente

@Injectable()
export class ItemsPortfolioService {

  env = environment.apiUrl;//importar rutas de apis relativas

  public jsonUrl = this.env + "/posts";

  constructor(private http:Http) { }

  getPortfolio():Observable<object[]> {
      return this.http
        .get(this.jsonUrl)
        .map((res: Response) => res.json());
  }

}
