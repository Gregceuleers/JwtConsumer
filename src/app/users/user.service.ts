import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_BASE_URL = 'http://localhost:8081/users';

  TOKEN = sessionStorage.getItem('token');

  constructor(
    public httpClient: HttpClient
  ) {
  }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.API_BASE_URL, {
      headers: {
        Authorization: this.TOKEN
      }
    });
  }

}

export interface User {
  username: string;
  password: string;
  roles: string[];
}
