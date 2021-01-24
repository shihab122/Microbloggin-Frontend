import {NgModule} from '@angular/core';
import {RegistrationComponent} from './registration.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

const routes = [
  {
    path: 'register',
    component: RegistrationComponent
  }
];

@NgModule({
  declarations: [RegistrationComponent],
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
export class RegistrationModule { }
