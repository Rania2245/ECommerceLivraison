import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commande } from '../Classes/commande';

@Injectable({
  providedIn: 'root',
})
export class CommandeService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAllCommandes(): Observable<Commande[]> {
    return this.http.get<Commande[]>(`${this.baseUrl}/commandes`);
  }

  getCommandeById(id: string): Observable<Commande> {
    return this.http.get<Commande>(`${this.baseUrl}/commandes/${id}`);
  }

  getAllCommandesWaiting(): Observable<Commande[]> {
    return this.http.get<Commande[]>(`${this.baseUrl}/commandes/waiting`);
  }

  getAllCommandesRunning(): Observable<Commande[]> {
    return this.http.get<Commande[]>(`${this.baseUrl}/commandes/running`);
  }

  addCommande(newCommande: Commande): Observable<Commande> {
    return this.http.post<Commande>(`${this.baseUrl}/commandes`, newCommande);
  }

  deleteCommande(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/commandes/${id}`);
  }

  changeEtatCommande(id: string, commande: Commande): Observable<Commande> {
    return this.http.put<Commande>(`${this.baseUrl}/commandes/${id}`, {
      commande,
    });
  }
}
