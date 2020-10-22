import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  BASE_URL = 'http://localhost:8081/login';

  constructor(
    public httpClient: HttpClient
  ) {
  }

  log(data: FormData): Observable<HttpResponse<Response>> {
    return this.httpClient.post<Response>(this.BASE_URL, data, {
      observe: 'response',
      responseType: 'json'
    });
  }
}
