import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GraphQLModule } from './graphql.module';
import { PostModule } from './post/post.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GraphQLModule, PostModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
