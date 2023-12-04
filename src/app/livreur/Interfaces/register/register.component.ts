import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LivreurService } from 'src/app/Services/livreur-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup | undefined;

  constructor(
    private fb: FormBuilder,
    private livreurService: LivreurService
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
      this.livreurService.addLivreur(formData).subscribe(
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
