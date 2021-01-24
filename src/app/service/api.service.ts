import {HttpClient, HttpHeaders, HttpResponse, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/throw';

import {Observable} from 'rxjs';
import {serialize} from '../utilites/serialize';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  headers = new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'observe': 'response'
  });

  constructor(private http: HttpClient) {
  }

  get(path: string, args?: any): Observable<any> {
    if (localStorage.getItem('accessToken') && this.headers.get('Authorization') !== localStorage.getItem('accessToken')) {
      this.headers = this.headers.set('Authorization', 'Bearer ' + localStorage.getItem('accessToken'));
    }

    const options = {
      headers: this.headers,
      withCredentials: true
    };

    if (args) {
      options['params'] = serialize(args);
      options['observe'] = 'response';
    }

    return this.http.get(path, options)
      .catch(this.checkError.bind(this));
  }

  post(path: string, body: any, customHeaders?: HttpHeaders): Observable<any> {
    return this.request(path, body, 'POST', customHeaders);
  }

  put(path: string, body: any, customHeaders?: HttpHeaders): Observable<any> {
    return this.request(path, body, 'PUT', customHeaders);
  }

  delete(path: string, body?: any): Observable<any> {
    return this.request(path, body, 'DELETE');
  }

  upload(path: string, body: any, file: File, customHeaders?: HttpHeaders): Observable<any> {
    if (customHeaders && localStorage.getItem('accessToken') && customHeaders.get('Authorization') == null) {
      customHeaders = customHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('accessToken'));
      if (customHeaders.get('Access-Control-Allow-Headers') == null) {
        customHeaders = customHeaders.append('Access-Control-Allow-Headers', 'Authorization, Access-Control-Allow-Headers, Origin, ' +
          'Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, X-CSRF-TOKEN, Observe');
      }
    } else if (localStorage.getItem('accessToken') && this.headers.get('Authorization') == null) {
      this.headers = this.headers.append('Authorization', 'Bearer ' + localStorage.getItem('accessToken'));
      if (this.headers.get('Access-Control-Allow-Headers') == null) {
        this.headers = this.headers.append('Access-Control-Allow-Headers', 'Authorization, Access-Control-Allow-Headers, Origin, ' +
          'Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, X-CSRF-TOKEN, Observe');
      }
    }

    const formdata: FormData = new FormData();
    formdata.append('file', file);

    const req = new HttpRequest('POST', path, formdata, {
      headers: customHeaders || this.headers,
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  private request(path: string, body: any, method = 'POST', customHeaders?: HttpHeaders): Observable<any> {
    if (customHeaders && localStorage.getItem('accessToken') && customHeaders.get('Authorization') == null) {
      customHeaders = customHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('accessToken'));
      if (customHeaders.get('Access-Control-Allow-Headers') == null) {
        customHeaders = customHeaders.append('Access-Control-Allow-Headers', 'Authorization, Access-Control-Allow-Headers, Origin, ' +
          'Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, X-CSRF-TOKEN, Observe');
      }
    } else if (localStorage.getItem('accessToken') && this.headers.get('Authorization') == null) {
      this.headers = this.headers.append('Authorization', 'Bearer ' + localStorage.getItem('accessToken'));
      if (this.headers.get('Access-Control-Allow-Headers') == null) {
        this.headers = this.headers.append('Access-Control-Allow-Headers', 'Authorization, Access-Control-Allow-Headers, Origin, ' +
          'Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, X-CSRF-TOKEN, Observe');
      }
    }

    const req = new HttpRequest(method, path, body, {
      headers: customHeaders || this.headers,
      withCredentials: true,
    });

    return this.http.request(req)
      .filter(response => response instanceof HttpResponse)
      .map((response: HttpResponse<any>) => response.body)
      .catch(error => this.checkError(error));
  }

  // Display error if logged in, otherwise redirect to IDP
  private checkError(error: any): any {
    if (error && error.status === 401) {
      // this.redirectIfUnauth(error);
    } else {
      // this.displayError(error);
    }
    throw error;
  }
}
