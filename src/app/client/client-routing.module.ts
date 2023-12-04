import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeProduitsComponent } from './Interfaces/liste-produits/liste-produits.component';
import { PanierComponent } from './Interfaces/panier/panier.component';
import { SelectedProduitComponent } from './Interfaces/selected-produit/selected-produit.component';
import { HomeComponent } from './Interfaces/home/home.component';
import { LogInClientComponent } from './Interfaces/log-in-client/LogInClientComponent';

const routes: Routes = [
  {
    path: 'listeProduit',
    component: ListeProduitsComponent,
  },
  {
    path: 'panier',
    component: PanierComponent,
  },

  {
    path: 'selectedproduit/:id',
    component: SelectedProduitComponent,
    data: { title: 'Détails du Produit' },
  },

  {
    path: 'logIn',
    component: LogInClientComponent,
  },

  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
