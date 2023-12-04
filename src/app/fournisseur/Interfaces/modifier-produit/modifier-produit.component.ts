import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from 'src/app/Classes/produit';
import { ProductService } from 'src/app/Services/produit-service';

@Component({
  selector: 'app-modifier-produit',
  templateUrl: './modifier-produit.component.html',
  styleUrls: ['./modifier-produit.component.css'],
})
export class ModifierProduitComponent implements OnInit {
  productForm!: FormGroup;
  produit!: Product;
  productId: string = '0';

  constructor(
    private activatedRoute: ActivatedRoute,
    private produitService: ProductService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const idParam = params.get('id');
      console.log({ idParam });
      this.productId = idParam !== null ? idParam : '0';
      console.log(this.productId);
      this.produitService.getProductById(this.productId).subscribe((data) => {
        this.produit = data;
        console.log(this.produit);
        this.createForm();
      });
    });
  }

  createForm() {
    this.productForm = this.fb.group({
      id: [this.productId, [Validators.required]],
      price: [
        this.produit.price,
        [Validators.required, Validators.pattern('^[1-9][0-9]*$')],
      ],
      img: [this.produit.img, [Validators.required]],
      label: [this.produit.label, [Validators.required]],
      stock: [this.produit.stock, [Validators.required]],
    });
  }

  get id() {
    return this.productForm.get('id');
  }

  get price() {
    return this.productForm.get('price');
  }

  get img() {
    return this.productForm.get('img');
  }

  onModifier() {
    console.log(this.productForm.value);
    this.produitService
      .updateProduct(this.productId, this.productForm.value)
      .subscribe((data) => console.log(data));
  }

  onVider() {
    this.productForm.reset();
  }
}
