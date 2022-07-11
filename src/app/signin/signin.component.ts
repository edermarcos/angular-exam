import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import _ from 'lodash';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {

  form: FormGroup;
  validations: any;

  users: any[];

  constructor(
    public router: Router,
    public formBuilder: FormBuilder) {
    this.initForm();

    this.users = JSON.parse(localStorage.getItem('users') || '[]');
  }

  ngOnInit(): void {
  }

  initForm(): void {
    this.validations = {
      email: [
        { type: 'required', message: 'Email is required' },
        { type: 'pattern', message: 'Enter a valid email' },
      ],
      password: [
        { type: 'required', message: 'Password is required' },
        { type: 'minlength', message: 'Your password must be at least 8 characters' },
      ],
    };

    this.form = this.formBuilder.group({
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'),
        ]),
      ],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
        ]),
      ],
    });
  }

  handleSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    const { password, email } = this.form.value;
    const userFound = this.users.find(user => user.email === email);
    if (!_.isEmpty(userFound) && userFound.password === password) {
      this.router.navigate(['/home']);
    }
  }
}
