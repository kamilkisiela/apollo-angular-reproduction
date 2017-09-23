import { Injectable } from '@angular/core';
import { Apollo } from 'kamilkisiela-apollo-angular';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { map } from 'rxjs/operator/map';

import gql from 'graphql-tag';

export const SimplePostFragment = gql`
  fragment SimplePost on Post {
    id
    title
    votes
  }
`;

export type Post = {
  id: string;
  title: string;
  votes: number;
}

const ALL_POSTS_QUERY = gql`
  query AllPosts {
    posts {
      ...SimplePost
    }
  }

  ${SimplePostFragment}
`;

const UPVOTE_MUTATION = gql`
  mutation UpvotePost ($postId: String!) {
    upvotePost(postId: $postId) {
      ...SimplePost
    }
  }
  
  ${SimplePostFragment}
`;

@Injectable()
export class PostsService {

  constructor(private apollo: Apollo) { }

  all(): Observable<Post[]> {
    const source$ = from(this.apollo.watchQuery<Post[]>({
      query: ALL_POSTS_QUERY
    }));

    return map.call(source$, result => result.data.posts);
  }

  upvote(postId: string): Observable<Post> {
    const source$ = from(this.apollo.mutate<Post>({
      mutation: UPVOTE_MUTATION,
      variables: { postId }
    }));

    return map.call(source$, result => result.data);
  }

}
