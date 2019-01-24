import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';//importar componenete para hacer peticiones http
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';//importar las variables de ambiente

@Injectable()
export class CatsService {

  env = environment.apiUrl;//importar rutas de apis relativas

  public jsonCats = this.env + "/categories";

  constructor(private http:Http) {}

  getCats():Observable<object[]> {
      return this.http
        .get(this.jsonCats)
        .map((res: Response) => res.json());
  }


}
