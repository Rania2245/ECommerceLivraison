import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Classes/produit';
import { ProductService } from 'src/app/Services/produit-service';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css'],
})
export class ListeProduitfourComponent implements OnInit {
  lesProduits: Product[] = [];
  produitsAffiches: Product[] = [];

  constructor(private produitService: ProductService) {}

  ngOnInit(): void {
    this.fetchProduits();
  }

  fetchProduits(): void {
    this.produitService.getAllProducts().subscribe((data) => {
      this.lesProduits = data;
      this.produitsAffiches = data;
    });
  }
  supprimer() {}

  // supprimer(id: number, index: number): void {
  //   this.produitService.deleteProduct(id).subscribe(() => {
  //     this.lesProduits.splice(index, 1);
  //     this.produitsAffiches = [...this.lesProduits];
  //   });
  // }
}
