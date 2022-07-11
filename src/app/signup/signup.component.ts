import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  form: FormGroup;
  roles: string[];
  validations: any;

  users: any[];

  constructor(
    public router: Router,
    public formBuilder: FormBuilder) {
    this.roles = ['admin', 'user', 'guest', 'owner'];
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
      rol: [
        this.roles[0],
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

    if (this.users.find(user => user.email === this.form.value.email)) {
      return;
    }

    this.users = [
      ...this.users,
      this.form.value,
    ];
    localStorage.setItem('users', JSON.stringify(this.users));

    this.router.navigate(['/signin']);
  }
}
