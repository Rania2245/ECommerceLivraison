import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FournisseurRoutingModule } from './fournisseur-routing.module';
import { RegisterComponent } from './Interfaces/register/register.component';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [CommonModule, FournisseurRoutingModule],
})
export class FournisseurModule {}
