import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {AuthModule} from './component/auth/auth.module';

const appRoutes: Routes = [
  {
    path      : '**',
    redirectTo: 'login'
    // redirectTo: 'calendar'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),

    TranslateModule.forRoot(),

    // Material
    MatButtonModule,
    MatIconModule,

    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
