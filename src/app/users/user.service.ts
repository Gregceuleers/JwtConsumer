import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_BASE_URL = 'http://localhost:8081/users';

  TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYwNDIxNDkwOH0.XMq3emAfWc5ZxAAabDtGBsqJRcaE7GI4LtlJWX0SWkzkPKpsl09_UY3RECWpyvGo6hY0FJK1uF-Fqi2tICjQVA';

  constructor(
    public httpClient: HttpClient
  ) {
  }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.API_BASE_URL, {
      headers: {
        Authorization: 'Bearer ' + this.TOKEN
      }
    });
  }

}

export interface User {
  username: string;
  password: string;
  roles: string[];
}
