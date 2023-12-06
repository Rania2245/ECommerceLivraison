import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FournisseurService } from 'src/app/Services/fournisseur-service';

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css'],
})
export class AjouterProduitComponent implements OnInit {
  productForm!: FormGroup;
  files!: File
  constructor(
    private fournisseurService: FournisseurService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
  }
  selectFiles(event: any) {
    this.files = event.target.files[0];
  }

  createForm() {
    this.productForm = this.fb.group({
      label: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      stock: ['', Validators.required],
    });
  }
  ajouterProduit() {
    const user = localStorage.getItem('user');
    console.log(this.productForm);
    if (user != null)
      if (this.productForm.valid) {
        let fd1 = new FormData();
       
        console.log(this.files);
        fd1.append("file",this.files);
        fd1.append('label', this.productForm.value['label']);
        fd1.append('price', this.productForm.value['price']);
        fd1.append('stock', this.productForm.value['stock']);

        console.log(fd1.get("price"));
        
        this.fournisseurService
          .addProductFour(fd1)
          .subscribe(
            (response) => {
              console.log('Product added successfully:', response);
              this.router.navigate(['/fournisseur/listeProduit']);
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
