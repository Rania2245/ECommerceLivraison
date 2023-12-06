import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Classes/produit';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }

  addProduct(newProduct: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/products`, newProduct);
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/products/${id}`);
  }

  updateProduct(id: string, updatedProduct: any): Observable<any> {
    const token = localStorage.getItem('user');
    const headers = new HttpHeaders({
      
      Authorization: `Bearer ${token}`,
    });

    const requestOptions = { headers: headers };

    return this.http.put<any>(
      `${this.baseUrl}/products/${id}`,
      updatedProduct,
      requestOptions
    );
  }

  deleteProduct(id: string): Observable<void> {
    const token = localStorage.getItem('user');
    const headers = new HttpHeaders({
      
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete<void>(`${this.baseUrl}/products/${id}`,{headers:headers});
  }
}
