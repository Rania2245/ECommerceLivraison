export class PasserCommande {
  produit!: string;
  qte!: number;
  constructor(produit: string, qte: number) {
    this.produit = produit;
    this.qte = qte;
  }
}
