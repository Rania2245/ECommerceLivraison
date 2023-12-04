import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLivreurComponent } from './Interfaces/home-livreur/home-livreur.component';
import { ListeCommandesComponent } from './Interfaces/liste-commandes/liste-commandes.component';
import { LogInComponent } from './Interfaces/log-in/log-in.component';
import { AuthFourGuard } from '../fournisseur/auth-four.guard';
import { AuthLivGuard } from './auth-liv.guard';
import { RegisterComponent } from './Interfaces/register/register.component';
import { SelectedCommandeComponent } from './Interfaces/selected-commande/selected-commande.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLivreurComponent,
    canActivate: [AuthLivGuard],
  },
  {
    path: 'commandes',
    component: ListeCommandesComponent,
    canActivate: [AuthLivGuard],
  },

  {
    path: 'login',
    component: LogInComponent,
  },
  {
    path: 'selectedCommande/:id',
    component: SelectedCommandeComponent,
    canActivate: [AuthLivGuard],
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
export class LivreurRoutingModule {}
