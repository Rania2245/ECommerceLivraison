import { Product } from './produit';

export class Fournisseur {
  id!:string ;
  username: string;
  password: string;
  products: Product[];

  constructor(username: string, password: string, products: Product[]) {
    this.username = username;
    this.password = password;
    this.products = products;
  }
}
