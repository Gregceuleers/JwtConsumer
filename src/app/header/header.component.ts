import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../login/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
  public authService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout();
  }
}
