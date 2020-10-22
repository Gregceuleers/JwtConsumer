import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    public builder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.form = this.builder.group({
      username: [''],
      pwd: ['']
    });
  }

}
