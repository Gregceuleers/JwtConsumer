import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthenticationService} from './authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  showMessageError = false;

  constructor(
    public builder: FormBuilder,
    public authService: AuthenticationService,
    public router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = this.builder.group({
      username: [''],
      password: ['']
    });
  }

  getToken(): void {

    this.showMessageError = false;

    if (this.form.valid) {
      this.authService.log(this.form.value).subscribe(response => {
        console.log(response.headers.get('Authorization'));
        const token = response.headers.get('Authorization');
        sessionStorage.setItem('token', token);

        if (token != null) {
          this.authService.isLogged = true;
          this.router.navigate(['users']).then();
        } else {
          this.showMessageError = true;
        }


      });
    }
  }
}
