import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Adresse } from 'src/app/Classes/adress';
import { Client } from 'src/app/Classes/client';
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
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      ville: ['', Validators.required],
      region: ['', Validators.required],
      rue: ['', Validators.required],
      postee: ['', Validators.required],
      tel: ['', Validators.required],
    });
  }

  onSubmit(): void {
    const formData = this.signupForm.value;
    let client: Client = new Client(
      "", "", this.signupForm.value["username"],
       this.signupForm.value["password"], 
       this.signupForm.value["tel"],
        new Adresse(
        this.signupForm.value["ville"],
         this.signupForm.value["region"], 
         this.signupForm.value["rue"],
          this.signupForm.value["postee"]
      ), []
    )
    console.log(client);




    this.clientService.registerClient(client).subscribe(
      (response) => {
        console.log('Client account created successfully', response);
        alert("Client account created successfully");
        this.router.navigate(['logIn']).then(() => window.location.reload());
      },
      (error) => {
        console.error('Error creating Client account', error);
        alert("Error creating Client account")
      }
    );

  }
}
