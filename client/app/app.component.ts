import { Component } from '@angular/core';
import { Angular2Apollo } from 'angular2-apollo';

@Component({
  selector: 'app-root',
  template: `
    <app-post-list></app-post-list>
  `
})
export class AppComponent {
  constructor(
    private apollo: Angular2Apollo
  ) {}
}
