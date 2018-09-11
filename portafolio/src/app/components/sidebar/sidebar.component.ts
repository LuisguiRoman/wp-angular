import { Component, OnInit } from '@angular/core';
// Can also be included with a regular script tag
import Typed from 'typed.js';

declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

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
