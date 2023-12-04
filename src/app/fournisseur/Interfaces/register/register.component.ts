import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FournisseurService } from 'src/app/Services/fournisseur-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup | undefined;

  constructor(
    private fb: FormBuilder,
    private fournisseurService: FournisseurService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      tel: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.signupForm?.valid) {
      const formData = this.signupForm.value;
      this.fournisseurService.addFournisseur(formData).subscribe(
        (response) => {
          console.log('Livreur account created successfully', response);
        },
        (error) => {
          console.error('Error creating Livreur account', error);
        }
      );
    }
  }
}
