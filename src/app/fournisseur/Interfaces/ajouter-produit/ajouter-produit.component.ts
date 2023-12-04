import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FournisseurService } from 'src/app/Services/fournisseur-service';

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css'],
})
export class AjouterProduitComponent implements OnInit {
  productForm!: FormGroup;

  constructor(
    private fournisseurService: FournisseurService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.productForm = this.fb.group({
      label: ['', Validators.required],
      img: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      stock: ['', Validators.required],
    });
  }
  ajouterProduit() {
    const user = localStorage.getItem('user');
    console.log(this.productForm);
    if (user != null)
      if (this.productForm.valid) {
        alert('test');
        this.fournisseurService
          .addProductFour(this.productForm.value)
          .subscribe(
            (response) => {
              console.log('Product added successfully:', response);
            },
            (error) => {
              this.handleAddProductError(error);
            }
          );
      }
  }

  private handleAddProductError(error: any): void {
    console.error('Error adding product:', error);
  }

  onVider() {
    this.productForm.reset();
  }
}
