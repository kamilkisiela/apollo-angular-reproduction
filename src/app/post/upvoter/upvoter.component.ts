import { Component, OnInit, Input } from '@angular/core';
import { Apollo } from 'apollo-angular';

import gql from 'graphql-tag';

@Component({
  selector: 'app-upvoter',
  templateUrl: './upvoter.component.html',
  styleUrls: ['./upvoter.component.css'],
})
export class UpvoterComponent implements OnInit {
  @Input() postId: number;

  constructor(private apollo: Apollo) {}

  ngOnInit() {}

  upvote() {
    this.apollo
      .mutate({
        mutation: gql`
          mutation upvotePost($postId: Int!) {
            upvotePost(postId: $postId) {
              id
              votes
            }
          }
        `,
        variables: {
          postId: this.postId,
        },
      })
      .subscribe();
  }
}
