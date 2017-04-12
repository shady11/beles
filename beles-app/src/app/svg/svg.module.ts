import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  ViewComponent, 
  CommentComponent, 
  TwitterComponent,
  FacebookComponent
} from './';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ViewComponent,
    CommentComponent,
    TwitterComponent,
    FacebookComponent
  ],
  declarations: [
    ViewComponent,
    CommentComponent,
    TwitterComponent,
    FacebookComponent
  ]
})
export class SvgModule { }
