import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthenticationService} from './authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    public builder: FormBuilder,
    public authService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
    this.form = this.builder.group({
      username: [''],
      password: ['']
    });
  }

  getToken(): void {
    if (this.form.valid) {
      this.authService.log(this.form.value).subscribe(response => {
        console.log(response.headers.get('Authorization'));
      });
    }
  }
}
