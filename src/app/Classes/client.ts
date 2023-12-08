import { Adresse } from './adress';
import { Commande } from './commande';

export class Client {
  id!: string;
  nom: string;
  prenom: string;
  username: string;
  password: string;
  tel: string;
  adresse: Adresse;
  commandes: Commande[];

  constructor(
    nom: string,
    prenom: string,
    username: string,
    password: string,
    tel: string,
    adresse: Adresse,
    commandes: Commande[],
  ) {
    this.nom = nom;
    this.prenom = prenom;
    this.username = username;
    this.password = password;
    this.tel = tel;
    this.adresse = adresse;
    this.commandes = commandes;
  }
}
