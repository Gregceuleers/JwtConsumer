import {Component, OnInit} from '@angular/core';
import {User, UserService} from './user.service';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: Observable<User[]>;
  users: User[];

  constructor(
    public userService: UserService,
    public router: Router
  ) {
  }

  ngOnInit(): void {
    this.users$ = this.userService.getAll();
    this.users$.subscribe(result => {
      this.users = result;
    }, error => {
      this.router.navigate(['403']).then();
    });
  }

}
