import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './client/Interfaces/home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomefourComponent } from './fournisseur/Interfaces/homefour/homefour.component';
import { AjouterProduitComponent } from './fournisseur/Interfaces/ajouter-produit/ajouter-produit.component';
import { LoginFourComponent } from './fournisseur/Interfaces/login-four/login-four.component';
import { ListeProduitsComponent } from './client/Interfaces/liste-produits/liste-produits.component';
import { NavbarComponent } from './client/Interfaces/navbar/navbar.component';
import { PanierComponent } from './client/Interfaces/panier/panier.component';
import { SelectedProduitComponent } from './client/Interfaces/selected-produit/selected-produit.component';
import { ModifierProduitComponent } from './fournisseur/Interfaces/modifier-produit/modifier-produit.component';

import { ListeCommandesComponent } from './livreur/Interfaces/liste-commandes/liste-commandes.component';
import { LogInComponent } from './livreur/Interfaces/log-in/log-in.component';

import { HomeLivreurComponent } from './livreur/Interfaces/home-livreur/home-livreur.component';
import { ListeProduitfourComponent } from './fournisseur/Interfaces/liste-produitfour/liste-produit.component';
import { LogInClientComponent } from './client/Interfaces/log-in-client/LogInClientComponent';
import { NavbarFourComponent } from './fournisseur/Interfaces/navbar-four/navbar-four.component';
import { NavbarlivComponent } from './livreur/Interfaces/navbarliv/navbarliv.component';
import { RegisterClientComponent } from './client/Interfaces/registerCl/register-client.component';
import { ListCommandeComponent } from './client/Interfaces/listCommandes/list-commande.component';
import { DetailsCommandeComponent } from './client/Interfaces/detailsCommande/details-commande.component';
import { RegisterComponent } from './fournisseur/Interfaces/register/register.component';
import { NavHomeComponent } from './client/Interfaces/nav-home/nav-home.component';
import { SelectedCommandeComponent } from './livreur/Interfaces/selected-commande/selected-commande.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomefourComponent,
    AjouterProduitComponent,
    LoginFourComponent,
    ListeProduitsComponent,
    NavbarComponent,
    PanierComponent,
    SelectedProduitComponent,
    ModifierProduitComponent,
    ListeProduitfourComponent,
    ListeCommandesComponent,
    LogInComponent,

    HomeLivreurComponent,
    LogInClientComponent,
    NavbarFourComponent,
    NavbarlivComponent,
    NavbarComponent,
    RegisterClientComponent,
    ListCommandeComponent,
    DetailsCommandeComponent,
    NavHomeComponent,
    SelectedCommandeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
