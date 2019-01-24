import { Component, OnInit } from '@angular/core';
// Can also be included with a regular script tag

import { environment } from '../../../environments/environment';//importar las variables de ambiente

import Typed from 'typed.js';

declare var jquery:any;
declare var $:any;

@Component({
  selector: 'ed-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public assetsUrl = environment.assetsUrl;//importar rutas de apis relativas

  constructor() { }

  ngOnInit() {
    this.typing();
  }

  typing(){
    let typed = new Typed('#myname a', {
      strings: ["Yo soy", "El Diablo"],
      startDelay: 500,
      typeSpeed: 40,
      backSpeed: 50,
      onStringTyped: function() {
        $('.typed-cursor').remove();
      }
    });
  }

}
