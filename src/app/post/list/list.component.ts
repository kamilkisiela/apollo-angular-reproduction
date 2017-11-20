import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

import gql from 'graphql-tag';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  posts: Observable<Record<string, any>>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.posts = this.apollo
      .watchQuery<{ posts: any }>({
        query: gql`
          query allPosts {
            posts {
              id
              title
              votes
              author {
                id
                firstName
                lastName
              }
            }
          }
        `,
      })
      .valueChanges.pipe(map(({ data }) => data.posts));
  }
}
