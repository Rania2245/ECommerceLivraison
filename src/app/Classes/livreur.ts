import { Livraison } from './livraison';

export class Livreur {
  id!:string;
  username: string;
  password: string;
  tel: string;
  livraisons: Livraison[];

  constructor(
    username: string,
    password: string,
    tel: string,
    livraisons: Livraison[],
  ) {
    this.username = username;
    this.password = password;
    this.tel = tel;
    this.livraisons = livraisons;
  }
}
