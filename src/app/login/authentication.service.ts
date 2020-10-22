import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  BASE_URL = 'http://localhost:8081/';

  isLogged = false;

  redirectUrl = '/login';

  constructor(
    public httpClient: HttpClient,
    public router: Router
  ) {
  }

  log(data: FormData): Observable<HttpResponse<Response>> {
    return this.httpClient.post<Response>(this.BASE_URL  + 'login', data, {
      observe: 'response',
      responseType: 'json'
    });
  }

  logout(): void {
    this.isLogged = false;
    this.redirectUrl = '/login';
    this.router.navigate(['login']).then();
  }

  signin(data: any): Observable<boolean> {
    data.roles = ['USER'];
    return this.httpClient.post<boolean>(this.BASE_URL + 'users', data);
  }
}
