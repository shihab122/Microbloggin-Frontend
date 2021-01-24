import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {User} from '../model/user.model';
import {LoginRequestBody} from '../model/login-request-body.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public _base_url = 'http://localhost:8080/user';
  public _create_user = this._base_url + '/create';
  public _login = this._base_url + '/login';

  private _httpHeaders = new HttpHeaders({
    'Accept': 'application/json'
  });

  constructor(
    private apiService: ApiService
  ) { }

  create(user: User): Observable<any> {
    return this.apiService.post(this._create_user, user, this._httpHeaders);
  }

  login(loginRequestBody: LoginRequestBody): Observable<any> {
    return this.apiService.post(this._login , loginRequestBody, this._httpHeaders);
  }
}
