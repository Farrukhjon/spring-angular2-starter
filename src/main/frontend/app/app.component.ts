import {Component} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

import {Home} from './views/home/home.component';
import {OnInit} from 'angular2/core';


@Component({
  selector: 'app',
  pipes: [],
  providers: [],
  directives: [],
  styles: [require('./app.component.scss')],
  template: require('./app.component.html')
})
@RouteConfig([
  {path: '/', component: Home, name: 'Index', useAsDefault: true},
  {path: '/home', component: Home, name: 'Home'},
  {
    path: '/about',
    loader: () => require('es6-promise!./views/about/about.component')('About'),
    name: 'About'
  },
  {
    path: '/playground',
    loader: () => require('es6-promise!./views/playground/playground.component')('Playground'),
    name: 'Playground'
  },
  {
    path: '/kitchensink',
    loader: () => require('es6-promise!./views/kitchensink/kitchensink.component')('KitchenSink'),
    name: 'KitchenSink'
  },
  {path: '/**', redirectTo: ['Index']}
])
export class App implements OnInit {
  angularLogo = 'assets/img/angular-logo.png';
  name = 'Spring Boot Angular 2 Webpack Starter';
  url = 'https://github.com/kucharzyk';

  constructor() {
  }


  ngOnInit():any {
    console.log('app on init');
  }
}
