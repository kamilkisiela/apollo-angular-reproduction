import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { UpvoterComponent } from './upvoter/upvoter.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ListComponent, UpvoterComponent],
  exports: [ListComponent, UpvoterComponent],
})
export class PostModule {}
