import { Client } from './client';
import { LignCommande } from './ligneCommende';
import { Product } from './produit';

export class Commande {
  _id: number | undefined;
  num_commande: number;
  etat: string;
  client: Client;
  date: Date;
  lignCommandes: LignCommande[];
  // produits!: Product[];
  produits!: Array<{ _id: number; qte: number }>;

  constructor(
    num_commande: number,
    etat: string,
    client: Client,
    date: Date,
    lignCommandes: LignCommande[]
  ) {
    this.num_commande = num_commande;
    this.etat = etat;
    this.client = client;
    this.date = date;
    this.lignCommandes = lignCommandes;
  }
}
