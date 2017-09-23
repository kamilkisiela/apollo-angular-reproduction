import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Blog</h1>

    <a routerLink="/">Welcome</a>
    <a routerLink="/posts">Posts</a>
    <a routerLink="/authors">Authors</a>
    
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
