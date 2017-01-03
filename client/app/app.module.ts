import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApolloModule } from 'angular2-apollo';

import { provideClient } from './apollo';
import { AppComponent } from './app.component';
import { PostListComponent } from './post/post-list.component';
import { PostUpvoterComponent } from './post/post-upvoter.component';

@NgModule({
  imports: [
    BrowserModule,
    ApolloModule.withClient(provideClient)
  ],
  declarations: [
    AppComponent,
    PostListComponent,
    PostUpvoterComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
