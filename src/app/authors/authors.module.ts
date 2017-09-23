import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { AuthorsService } from './authors.service';

@NgModule({
  imports: [
    CommonModule,
    AuthorsRoutingModule
  ],
  declarations: [AuthorsListComponent],
  providers: [AuthorsService]
})
export class AuthorsModule { }
