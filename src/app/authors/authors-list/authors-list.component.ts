import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthorsService, Author } from '../authors.service';

@Component({
  selector: 'app-authors-list',
  template: `
    <h3>List of authors</h3>

    <ul>
      <li *ngFor="let author of authors | async">
        {{author.firstName}} {{author.lastName}}
      </li>
    </ul>
  `
})
export class AuthorsListComponent implements OnInit {
  authors: Observable<Author[]>;
  
  constructor(
    private authorsService: AuthorsService
  ) { }
  
  ngOnInit() {
    this.authors = this.authorsService.all();
  }

}
