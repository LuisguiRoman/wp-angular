import { Component, OnInit, Input } from '@angular/core';

declare var jquery:any;
declare var $:any;

@Component({
  selector: 'ed-brick',
  templateUrl: './brick.component.html',
  styleUrls: ['./brick.component.css']
})
export class BrickComponent implements OnInit {

  items: string[] = [];

  @Input() item;
  constructor() { }

  ngOnInit(){
  }

  @Input()
  set ready(isReady: boolean) {
    if (isReady) {
      
      var $contenedor = $('#wall').isotope();

      $contenedor.imagesLoaded( function() {
          $contenedor.isotope({
              itemSelector: 'ed-brick',
              layout: 'layout'
          });
          //ordenar aleatoriamente ------ sortBy: 'random'
      });

      $('#filter li').on('click', function() {
          var valor = $(this).attr('data-cat');//capturar la ciudad
          if (valor === '*') {
            valor = valor;
          }else{
            valor = '.'+valor;
          }
          $contenedor.isotope({ filter: valor });//filtrar
      });
      
    }//fin if
  }//fin ready


}