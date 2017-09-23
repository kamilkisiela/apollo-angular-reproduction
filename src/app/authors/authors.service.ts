import { Injectable } from '@angular/core';
import { Apollo } from 'kamilkisiela-apollo-angular';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { map } from 'rxjs/operator/map';

import gql from 'graphql-tag';

const ALL_AUTHORS_QUERY = gql`
  query AllAuthors {
    authors {
      id
      firstName
      lastName
    }
  }
`;

export type Author = {
  id: string;
  firstName: string;
  lastName: string;
}

@Injectable()
export class AuthorsService {

  constructor(private apollo: Apollo) { }

  all(): Observable<Author[]> {
    const source$ = from(this.apollo.watchQuery<Author[]>({
      query: ALL_AUTHORS_QUERY
    }));
    
    return map.call(source$, result => result.data.authors);
  }

}
