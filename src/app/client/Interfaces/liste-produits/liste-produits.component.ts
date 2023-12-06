import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Classes/produit';
import { ProductService } from 'src/app/Services/produit-service';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css'],
})
export class ListeProduitsComponent implements OnInit {
  lesProduits!: Product[];
  produitsAffiches!: Product[];
  productAddedToCart: boolean = false;
  addedProduct: any;
  url="http://localhost:3000/image/"
  constructor(private produitService: ProductService) {}

  ngOnInit(): void {
    this.produitService.getAllProducts().subscribe((data) => {
      this.lesProduits = data;
      this.produitsAffiches = data;
    });
  }

  ajoutPanier(produit: Product) {
    this.productAddedToCart = true;
    this.addedProduct = produit;
    setTimeout(() => {
      this.productAddedToCart = false;
      this.addedProduct = null;
    }, 5000);

    const panier = localStorage.getItem('panier');
    if (panier === null) {
      const newpanier: Product[] = [produit];
      localStorage.setItem('panier', JSON.stringify(newpanier));
    } else {
      const parsedpanier = JSON.parse(panier);
      parsedpanier.push(produit);
      localStorage.setItem('panier', JSON.stringify(parsedpanier));
    }
  }
}
