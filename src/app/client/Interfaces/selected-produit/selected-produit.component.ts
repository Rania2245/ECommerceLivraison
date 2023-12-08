import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Classes/produit';
import { ProductService } from 'src/app/Services/produit-service';

@Component({
  selector: 'app-selected-produit',
  templateUrl: './selected-produit.component.html',
  styleUrls: ['./selected-produit.component.css'],
})
export class SelectedProduitComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private produitService: ProductService,
  ) {}
  idProduit!: string;
  produit!: Product;

  ngOnInit(): void {
    this.idProduit = this.activatedRoute.snapshot.params['id'];
    this.produitService
      .getProductById(this.idProduit)
      .subscribe((data) => (this.produit = data));
  }
  ajoutPanier(produit: Product) {
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
