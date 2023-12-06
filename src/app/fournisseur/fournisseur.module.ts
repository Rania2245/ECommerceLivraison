import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FournisseurRoutingModule } from './fournisseur-routing.module';
import { RegisterComponent } from './Interfaces/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [CommonModule, FournisseurRoutingModule,FormsModule,
    ReactiveFormsModule],
})
export class FournisseurModule {}
