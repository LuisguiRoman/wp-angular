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

      /*
      $('#filter li').on('click', function() {
          var valor = $(this).attr('data-cat');//capturar la ciudad
          if (valor === '*') {
            valor = valor;
          }else{
            valor = '.'+valor;
          }
          $contenedor.isotope({ filter: valor });//filtrar
      });
      */


      $('#wall').imagesLoaded( function() {
          console.log('cargaron');
          resizeAllGridItems();

          function resizeAllGridItems(){
            $('ed-brick').each(function(i, brick){
              resizeGridItem( brick );
            });
          }

          function resizeInstance(instance){
            var item = instance.elements[0];
            resizeGridItem(item);
          }

          function resizeGridItem(item){
            console.log(item);
            var grid = document.getElementsByClassName("wall")[0];
            var rowHeight = parseInt( window.getComputedStyle(grid).getPropertyValue('grid-auto-rows') );
            var rowGap = parseInt( window.getComputedStyle(grid).getPropertyValue('grid-row-gap') );

            console.log(rowHeight)

            console.log(rowGap)

            var rowSpan = Math.ceil( ( $(item).find('img').height()+rowGap)/(rowHeight+rowGap) );

            item.style.gridRowEnd = "span "+rowSpan;
            $(item).css('opacity', 1);
          }

          window.addEventListener("resize", resizeAllGridItems);
      });

      
    }//fin if
  }//fin ready


}