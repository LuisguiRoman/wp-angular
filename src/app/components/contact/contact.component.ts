import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';//servicio para etqueta title dynamica

@Component({
  selector: 'ed-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
  	private titleService: Title
  	) { }

  ngOnInit() {
  	this.titleService.setTitle( 'Contacto -  El Diablo' );
  }

}
