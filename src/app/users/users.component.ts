import {Component, OnInit} from '@angular/core';
import {User, UserService} from './user.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(
    public userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.users$ = this.userService.getAll();
  }

}
