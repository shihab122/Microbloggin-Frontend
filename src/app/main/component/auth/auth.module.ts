import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginModule} from './login/login.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule,
  ],
  exports: []
})
export class AuthModule { }
