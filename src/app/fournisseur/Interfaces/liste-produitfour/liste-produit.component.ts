import { Component, OnInit } from '@angular/core';
import { Fournisseur } from 'src/app/Classes/founisseur';
import { Product } from 'src/app/Classes/produit';
import { FournisseurService } from 'src/app/Services/fournisseur-service';
import { ProductService } from 'src/app/Services/produit-service';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css'],
})
export class ListeProduitfourComponent implements OnInit {
  lesProduits: Product[] = [];
  produitsAffiches: Product[] = [];
  url = 'http://localhost:3000/image/';
  fournisseur!: Fournisseur;
  constructor(
    private produitService: ProductService,
    private fourService: FournisseurService,
  ) {}

  ngOnInit(): void {
    this.fourService.getFournisseurById().subscribe((data) => {
      this.fournisseur = data;
    });
  }

  fetchProduits(): void {
    this.produitService.getAllProducts().subscribe((data) => {
      this.lesProduits = data;
      this.produitsAffiches = data;
    });
  }

  supprimer(id: string): void {
    this.produitService.deleteProduct(id).subscribe((data) => {
      this.fournisseur.products = this.fournisseur.products.filter(
        (e) => e._id != id,
      );
    });
  }
}
