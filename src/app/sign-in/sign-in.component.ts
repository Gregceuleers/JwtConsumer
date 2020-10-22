import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthenticationService} from '../login/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  form: FormGroup;
  showMessageSuccess = false;
  showMessageFail = false;

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

  signin(): void {

    if (this.form.valid) {
      this.authService.signin(this.form.value as FormData).subscribe((result: boolean) => {
        if (result) {
          this.showMessageSuccess = result;
        } else {
          this.showMessageFail = result;
        }
      });
    }
  }
}
