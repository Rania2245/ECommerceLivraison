import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/Classes/client';
import { ClientService } from 'src/app/Services/client-service';

@Component({
  selector: 'app-log-in-client',
  templateUrl: './log-in-client.component.html',
  styleUrls: ['./log-in-client.component.css'],
})
export class LogInClientComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: ['', [Validators.required]],
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  isValidPattern() {
    return (
      this.loginForm.get('email')?.hasError('pattern') &&
      this.loginForm.get('email')?.dirty
    );
  }

  onVide() {
    this.loginForm.reset();
  }

  onSubmit() {
    const userEmail = this.email?.value;
    const passwordEmail = this.password?.value;
    console.log({ userEmail, passwordEmail });

    if (userEmail && passwordEmail) {
      this.clientService
        .loginClient({ username: userEmail, password: passwordEmail })
        .subscribe(
          ({ token, client }: { token: string; client: Client }) => {
            localStorage.setItem('user', token);

            this.router.navigate(['/']).then(() => window.location.reload());
          },
          (loginError: any) => {
            console.error('Error during login:', loginError);
          }
        );
    }
  }
}
