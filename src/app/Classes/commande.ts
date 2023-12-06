import { Client } from './client';
import { LignCommande } from './ligneCommende';
import { Product } from './produit';

export class Commande {
  _id!: string ;
  
  etat: string;
  client: Client;
  date: Date;
  lignCommandes: LignCommande[];
  // produits!: Product[];
  produits!: Array<{ _id: string; qte: number }>;

  constructor(
    
    etat: string,
    client: Client,
    date: Date,
    lignCommandes: LignCommande[]
  ) {
    
    this.etat = etat;
    this.client = client;
    this.date = date;
    this.lignCommandes = lignCommandes;
  }
}
