import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FournisseurService } from 'src/app/Services/fournisseur-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private fournisseurService: FournisseurService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.signupForm?.valid) {
      const formData = this.signupForm.value;
      this.fournisseurService.addFournisseur(formData).subscribe(
        (response) => {
          console.log('Fournisseur account created successfully', response);
          alert("Fournisseur account created successfully");
          this.router.navigate(['login']).then(() => window.location.reload());
        },
        (error) => {
          console.error('Error creating Fournisseur account', error);
          alert('les champs sont invalides !! ');
        },
      );
    }
  }
}
