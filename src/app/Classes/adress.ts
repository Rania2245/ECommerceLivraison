export class Adresse {
  ville: string;
  region: string;
  rue: string;
  poste: string;
  constructor(
    ville: string,
    region: string,
    rue: string,
    poste: string,){
      this.poste=poste;
      this.region=region;
      this.rue=rue;
      this.ville=ville
    }
}
