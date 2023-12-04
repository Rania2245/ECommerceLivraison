import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livraison } from '../Classes/livraison';

@Injectable({
  providedIn: 'root',
})
export class LivraisonService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAllLivraisons(): Observable<Livraison[]> {
    return this.http.get<Livraison[]>(`${this.baseUrl}/livraisons`);
  }

  addLivraison(newLivraison: Livraison): Observable<Livraison> {
    return this.http.post<Livraison>(
      `${this.baseUrl}/livraisons`,
      newLivraison
    );
  }

  getLivraisonById(id: number): Observable<Livraison> {
    return this.http.get<Livraison>(`${this.baseUrl}/livraisons/${id}`);
  }

  updateLivraison(
    id: number,
    updatedLivraison: Livraison
  ): Observable<Livraison> {
    return this.http.put<Livraison>(
      `${this.baseUrl}/livraisons/${id}`,
      updatedLivraison
    );
  }

  deleteLivraison(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/livraisons/${id}`);
  }
}
