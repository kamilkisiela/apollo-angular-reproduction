import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './welcome/welcome.module#WelcomeModule' },
  { path: 'authors', loadChildren: './authors/authors.module#AuthorsModule' },
  { path: 'posts', loadChildren: './posts/posts.module#PostsModule' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
