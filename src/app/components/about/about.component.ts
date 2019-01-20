import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	this.skills();
  }

  skills(){
  	var get_per = $('.skill');
  	var i;
	  for( i=0; i < get_per.length; i++ ){
	    var ancho = $(get_per[i]).attr('data-skill');
	    $(get_per[i]).children('span').delay(1300).animate({
	    	'width': ancho
	    },1000, 'linear');
	  }
  }

}
