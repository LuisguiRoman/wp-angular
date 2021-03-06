import { Component, OnInit } from '@angular/core';
import { ItemsPortfolioService } from '../../services/items-portfolio.service';//importar el servicio
import { CatsService } from '../../services/cats.service';
import { Observable } from 'rxjs/Observable';

import { Title }     from '@angular/platform-browser';//servicio para etqueta title dynamica

import 'rxjs/add/operator/map';

declare var jquery:any;
declare var $:any;

//inyectar el servicio en el provider del componente
@Component({
  selector: 'ed-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  cats:object[];
  items:object[];
  
  //inyectar el servicio en el constructor
  constructor( 
    private titleService: Title,
    private _itemsPortfolioService:ItemsPortfolioService,
    private _catsService:CatsService
  ) { }

  ngOnInit() {
    this.titleService.setTitle( 'El Diablo' );
    this.getCatsPortfolio();
    this.getItemsPortfolio();
  }

  getCatsPortfolio(){
    this._catsService
      .getCats()
      .subscribe(
          (respuesta) => { this.cats = respuesta; console.log(this.cats); },
          (err) => { console.error(err) },
          () => { }
        )
  }

  getItemsPortfolio(){
    this._itemsPortfolioService
      .getPortfolio()
      .subscribe(
          (respuesta) => { this.items = respuesta; console.log(this.items); },
          (err) => { console.error(err) },
          () => { }
        )
  }

}