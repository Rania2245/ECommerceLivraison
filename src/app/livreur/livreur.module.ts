import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivreurRoutingModule } from './livreur-routing.module';

import { RegisterComponent } from './Interfaces/register/register.component';
import { SelectedCommandeComponent } from './Interfaces/selected-commande/selected-commande.component';

@NgModule({
  declarations: [RegisterComponent, SelectedCommandeComponent],
  imports: [CommonModule, LivreurRoutingModule],
})
export class LivreurModule {}
