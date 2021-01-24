import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BlogPostListModule} from './blog-post-list/blog-post-list.module';

@NgModule({
  declarations: [],
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BlogPostListModule
  ]
})
export class BlogPostModule { }
