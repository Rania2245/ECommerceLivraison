import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/Services/client-service';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css'],
})
export class RegisterClientComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      adresse: ['', Validators.required],
      tel: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.signupForm?.valid) {
      const formData = this.signupForm.value;
      this.clientService.registerClient(formData).subscribe(
        (response) => {
          console.log('Client account created successfully', response);
          alert('Client account created successfully');
        },
        (error) => {
          console.error('Error creating Client account', error);
          alert('Error creating Client account');
        },
      );
    }
  }
}
