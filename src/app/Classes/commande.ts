import { Client } from './client';
import { LignCommande } from './ligneCommende';


export class Commande {
  _id!: string  ;
  
  etat: string;
  client: Client;
  date: Date;
  lignCommandes: LignCommande[];
  
  produits!: Array<{ _id: string; qte: number }>;

  constructor(
    etat: string,
    client: Client,
    date: Date,
    lignCommandes: LignCommande[],
    produits: any,

  ) {
    this.etat = etat;
    this.client = client;
    this.date = date;
    this.lignCommandes = lignCommandes;
    this.produits=produits;
  }
}
