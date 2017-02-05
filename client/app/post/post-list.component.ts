import { Component, OnInit } from '@angular/core';
import { Apollo, ApolloQueryObservable } from 'apollo-angular';
import { ApolloQueryResult } from 'apollo-client';

import gql from 'graphql-tag';

@Component({
  selector: 'app-post-list',
  template: `
    <ul>
      <li *ngFor="let post of posts | async | select: 'posts'">
        {{post.title}} by {{post.author.firstName}} {{post.author.lastName}}
        ({{post.votes}} votes)
        <app-post-upvoter [postId]="post.id"></app-post-upvoter>
      </li>
    </ul>
  `
})
export class PostListComponent implements OnInit {
  posts: ApolloQueryObservable<ApolloQueryResult<any>>;
  
  constructor(
    private apollo: Apollo
  ) {}

  ngOnInit() {
    this.posts = this.apollo.watchQuery({
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
    });
  }
}
