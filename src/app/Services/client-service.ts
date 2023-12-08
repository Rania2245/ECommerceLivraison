import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../Classes/client';
import { Commande } from '../Classes/commande';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  clientLogged!: Client;

  getProfile() {
    throw new Error('Method not implemented.');
  }
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.baseUrl}/clients`);
  }

  registerClient(newClient: Client): Observable<Client> {
    return this.http.post<Client>(
      `${this.baseUrl}/clients/register`,
      newClient,
    );
  }

  getClientById(accessToken: string): Observable<Client> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    });
    return this.http.get<Client>(`${this.baseUrl}/clients/getById`, {
      headers: headers,
    });
  }

  updateClient(id: number, updatedClient: Client): Observable<Client> {
    return this.http.put<Client>(
      `${this.baseUrl}/clients/${id}`,
      updatedClient,
    );
  }

  deleteClient(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/clients/${id}`);
  }

  loginClient(credentials: {
    username: string;
    password: string;
  }): Observable<{ token: string; client: Client }> {
    return this.http.post<{ token: string; client: Client }>(
      `${this.baseUrl}/clients/login`,
      credentials,
    );
  }

  addCommande(newCommande: Commande): Observable<Client> {
    const token = localStorage.getItem('user');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    return this.http.put<Client>(
      `${this.baseUrl}/clients/addCommande`,
      newCommande,
      { headers },
    );
  }
}
