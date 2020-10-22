import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  form: FormGroup;

  constructor(
    public builder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.form = this.builder.group({
      username: [''],
      password: ['']
    });
  }

  signin(): void {

  }
}
