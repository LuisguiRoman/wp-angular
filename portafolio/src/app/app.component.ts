import { Component } from '@angular/core';

import { trigger, state, animate, style, transition, query} from '@angular/animations';
//importar soportes de animaciones


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerAnimation', [
      transition('* <=> *', [
        // Initial state of new route
        query(':enter',
          style({
            position: 'fixed',
            width: '100%',
            opacity: 0,
            transform: 'scale(2)'
          }),
          {optional:true}),
        // move page off screen right on leave
        query(':leave',
          animate('1000ms ease-in-out',
            style({
              position: 'fixed',
              opacity: 0,
              width: '100%',
              transform: 'scale(.5)'
            })
          ),
        {optional:true}),
        // move page in screen from left to right
        query(':enter',
          animate('1000ms ease-in-out',
            style({
              opacity: 1,
              transform: 'scale(1)'
            })
          ),
        {optional:true}),
      ])
    ])
  ]

})
export class AppComponent {

  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation
  }

}
