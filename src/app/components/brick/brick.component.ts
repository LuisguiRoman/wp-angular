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
            var grid = document.getElementsByClassName("wall")[0];
            var rowHeight = parseInt( window.getComputedStyle(grid).getPropertyValue('grid-auto-rows') );
            var rowGap = parseInt( window.getComputedStyle(grid).getPropertyValue('grid-row-gap') );

            var rowSpan = Math.ceil( ( $(item).find('img').height()+20+rowGap)/(rowHeight+rowGap) );

            item.style.gridRowEnd = "span "+rowSpan;
            item.style.opacity = 1;

            /*
            $('#wall').height( $('#wall').height() );

            $(item).delay(10).animate({
              'width': $(item).width(),
              'opacity': 1,
              'position': 'absolute',
              'left': $(item).position().left,
              'top': $(item).position().top,
            }, 1, function(){
              $(item).css('position', 'absolute')
            });
            */

          }

          window.addEventListener("resize", resizeAllGridItems);

          $('#filter li').on('click', function(){
              var valor = $(this).attr('data-cat');//capturar la ciudad
              if (valor === '*') {
                $('ed-brick').stop(true).show(400);
              }else{
                valor = '.'+valor;
                $('ed-brick').not(valor).stop(true).hide(400, function(){
                  $('ed-brick'+valor).show(400);
                });
              }
          });
      });

      
    }//fin if
  }//fin ready


}