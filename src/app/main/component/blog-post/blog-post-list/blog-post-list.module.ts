import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {
  MatAutocompleteModule,
  MatButtonModule, MatButtonToggleModule, MatChipsModule, MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatMenuModule,
  MatPaginatorModule, MatSelectModule,
  MatSortModule,
  MatTableModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {LoginComponent} from '../../auth/login/login.component';
import {BlogPostListComponent} from './blog-post-list.component';

const routes = [
  {
    path: 'blog-post-list',
    component: BlogPostListComponent
  }
];

@NgModule({
  declarations: [BlogPostListComponent],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),

    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatMenuModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatToolbarModule
  ]
})
export class BlogPostListModule { }
