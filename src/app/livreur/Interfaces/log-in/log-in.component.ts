import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Livreur } from 'src/app/Classes/livreur';
import { LivreurService } from 'src/app/Services/livreur-service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private livreurService: LivreurService,
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

  onSubmit() {
    const userEmail = this.email?.value;
    const passwordEmail = this.password?.value;
    console.log({ userEmail, passwordEmail });

    if (userEmail && passwordEmail) {
      this.livreurService
        .loginLivreur({ username: userEmail, password: passwordEmail })
        .subscribe(
          ({ token, livreur }: { token: string; livreur: Livreur }) => {
            localStorage.setItem('user', token);

            this.router
              .navigate(['/livreur'])
              .then(() => window.location.reload());
          },
          (loginError: any) => {
            console.error('Error during login:', loginError);
          }
        );
    }
  }
}
