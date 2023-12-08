import { Commande } from './commande';
import { Product } from './produit';

export class LignCommande {
  _id!:string;
  commande: Commande;
  product: Product;
  prix: number;
  quantite: number;

  constructor(
    commande: Commande,
    product: Product,
    prix: number,
    quantite: number,
  ) {
    this.commande = commande;
    this.product = product;
    this.prix = prix;
    this.quantite = quantite;
  }
}
