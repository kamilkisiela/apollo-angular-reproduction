import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PostsService, Post } from '../posts.service';

@Component({
  selector: 'app-posts-list',
  template: `
  <h3>List of posts</h3>
  
  <ul>
    <li *ngFor="let post of posts | async">
      {{post.title}} ({{post.votes}})
    </li>
  </ul>
  `
})
export class PostsListComponent implements OnInit {
  posts: Observable<Post[]>;

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.posts = this.postsService.all();
  }

}
