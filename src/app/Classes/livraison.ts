import { Commande } from './commande';
import { Livreur } from './livreur';

export class Livraison {
  id: number | undefined;
  commandes: Commande[];
  livreur: Livreur;

  constructor(commandes: Commande[], livreur: Livreur) {
    this.commandes = commandes;
    this.livreur = livreur;
  }
}
