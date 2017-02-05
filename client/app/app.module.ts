import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApolloModule } from 'apollo-angular';

import { provideClient } from './apollo';
import { AppComponent } from './app.component';
import { PostListComponent } from './post/post-list.component';
import { PostUpvoterComponent } from './post/post-upvoter.component';

@NgModule({
  imports: [
    BrowserModule,
    ApolloModule.forRoot(provideClient)
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
