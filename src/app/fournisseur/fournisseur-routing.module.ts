import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomefourComponent } from './Interfaces/homefour/homefour.component';
import { AjouterProduitComponent } from './Interfaces/ajouter-produit/ajouter-produit.component';
import { ModifierProduitComponent } from './Interfaces/modifier-produit/modifier-produit.component';
import { ListeProduitfourComponent } from './Interfaces/liste-produitfour/liste-produit.component';
import { AuthFourGuard } from './auth-four.guard';
import { LoginFourComponent } from './Interfaces/login-four/login-four.component';
import { RegisterComponent } from './Interfaces/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomefourComponent,
    canActivate: [AuthFourGuard],
  },
  {
    path: 'ajouterProduit',
    component: AjouterProduitComponent,
    canActivate: [AuthFourGuard],
  },
  {
    path: 'listeProduit',
    component: ListeProduitfourComponent,
    canActivate: [AuthFourGuard],
  },
  {
    path: 'modifierProduit/:id',
    component: ModifierProduitComponent,
    canActivate: [AuthFourGuard],
  },
  {
    path: 'login',
    component: LoginFourComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FournisseurRoutingModule {}
