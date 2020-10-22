import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
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

  log(data: FormData): Observable<string> {
    return this.httpClient.post<string>(this.BASE_URL, data);
  }
}
