import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Fournisseur } from 'src/app/Classes/founisseur';
import { FournisseurService } from 'src/app/Services/fournisseur-service';

@Component({
  selector: 'app-login-four',
  templateUrl: './login-four.component.html',
  styleUrls: ['./login-four.component.css'],
})
export class LoginFourComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private fournisseurService: FournisseurService,
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
      this.fournisseurService
        .loginFournisseur({ username: userEmail, password: passwordEmail })
        .subscribe(
          ({
            token,
            fournisseur,
          }: {
            token: string;
            fournisseur: Fournisseur;
          }) => {
            localStorage.setItem('user', token);

            this.router
              .navigate(['/fournisseur'])
              .then(() => window.location.reload());
          },
          (loginError: any) => {
            console.error('Error during login:', loginError);
          }
        );
    }
  }
}
