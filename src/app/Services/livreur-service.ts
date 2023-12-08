import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livreur } from '../Classes/livreur';

@Injectable({
  providedIn: 'root',
})
export class LivreurService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAllLivreurs(): Observable<Livreur[]> {
    return this.http.get<Livreur[]>(`${this.baseUrl}/livreurs`);
  }

  addLivreur(newLivreur: Livreur): Observable<Livreur> {
    return this.http.post<Livreur>(`${this.baseUrl}/livreurs`, newLivreur);
  }

  getLivreurById(id: number): Observable<Livreur> {
    return this.http.get<Livreur>(`${this.baseUrl}/livreurs/${id}`);
  }

  updateLivreur(id: number, updatedLivreur: Livreur): Observable<Livreur> {
    return this.http.put<Livreur>(
      `${this.baseUrl}/livreurs/${id}`,
      updatedLivreur,
    );
  }

  deleteLivreur(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/livreurs/${id}`);
  }

  loginLivreur(credentials: {
    username: string;
    password: string;
  }): Observable<{ token: string; livreur: Livreur }> {
    return this.http.post<{ token: string; livreur: Livreur }>(
      `${this.baseUrl}/livreurs/login`,
      credentials,
    );
  }

  addLivraisonLiv(id: number, commandes: string[]): Observable<Livreur> {
    return this.http.post<Livreur>(
      `${this.baseUrl}/livreurs/${id}/addLivraison`,
      { commandes },
    );
  }
}
