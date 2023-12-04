import { Fournisseur } from './founisseur';

export class Product {
  _id: number | undefined;
  img: string;
  label: string;
  price: number;
  stock: number;
  fournisseur: Fournisseur;

  constructor(
    img: string,
    label: string,
    price: number,
    stock: number,
    fournisseur: Fournisseur
  ) {
    (this.img = img), (this.label = label);
    this.price = price;
    this.stock = stock;
    this.fournisseur = fournisseur;
  }
}
