import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivreurRoutingModule } from './livreur-routing.module';

import { RegisterComponent } from './Interfaces/register/register.component';
import { SelectedCommandeComponent } from './Interfaces/selected-commande/selected-commande.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegisterComponent, 
    
  ],
  imports: [
    CommonModule,
    LivreurRoutingModule,
    FormsModule,
    ReactiveFormsModule],
})
export class LivreurModule {}
