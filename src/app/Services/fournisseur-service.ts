import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Fournisseur } from '../Classes/founisseur';
import { Product } from '../Classes/produit';

@Injectable({
  providedIn: 'root',
})
export class FournisseurService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  addFournisseur(newFournisseur: Fournisseur): Observable<Fournisseur> {
    newFournisseur.products = [];
    return this.http.post<Fournisseur>(
      `${this.baseUrl}/fournisseurs`,
      newFournisseur
    );
  }

 
    
  
  getFournisseurById(): Observable<Fournisseur> {
    const token = localStorage.getItem('user');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Fournisseur>(`${this.baseUrl}/fournisseurs/getById`,{headers:headers});
  }

  updateFournisseur(
    id: number,
    updatedFournisseur: Fournisseur
  ): Observable<Fournisseur> {
    return this.http.put<Fournisseur>(
      `${this.baseUrl}/fournisseurs/${id}`,
      updatedFournisseur
    );
  }

  getAllFournisseurs(): Observable<Fournisseur[]> {
    return this.http.get<Fournisseur[]>(`${this.baseUrl}/fournisseurs`);
  }

  addProductFour(formData: any): Observable<Fournisseur> {
    const token = localStorage.getItem('user');
    const headers = new HttpHeaders({
      
      Authorization: `Bearer ${token}`,
    });

    const requestOptions = { headers: headers };

    return this.http
      .put<Fournisseur>(
        `${this.baseUrl}/fournisseurs/addProduct`,
        formData,
        requestOptions
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred:', error);
    return throwError(error);
  }

  deleteFournisseur(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/fournisseurs/${id}`);
  }

  loginFournisseur(credentials: {
    username: string;
    password: string;
  }): Observable<{ token: string; fournisseur: Fournisseur }> {
    return this.http.post<{ token: string; fournisseur: Fournisseur }>(
      `${this.baseUrl}/fournisseurs/login`,
      credentials
    );
  }
}
