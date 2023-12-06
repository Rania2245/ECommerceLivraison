import { Fournisseur } from './founisseur';

export class Product {
  _id: string ;
  img: string;
  label: string;
  price: number;
  stock: number;
  fournisseur: Fournisseur;

  constructor(
    _id:string,
    img: string,
    label: string,
    price: number,
    stock: number,
    fournisseur: Fournisseur
  ) {
    (this.img = img), (this.label = label);
    this.price = price;
    this.stock = stock;
    this._id=_id
    this.fournisseur = fournisseur;
  }
}
