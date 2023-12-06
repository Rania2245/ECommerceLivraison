import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/Classes/client';
import { Commande } from 'src/app/Classes/commande';
import { Livraison } from 'src/app/Classes/livraison';
import { CommandeService } from 'src/app/Services/commande-service';
import { LivraisonService } from 'src/app/Services/livraison-service';

@Component({
  selector: 'app-liste-commandes',
  templateUrl: './liste-commandes.component.html',
  styleUrls: ['./liste-commandes.component.css'],
})
export class ListeCommandesComponent implements OnInit {
  commandes: Commande[] = [];
  client!: Client[];

  constructor(
    private commandeservice: CommandeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchLivraisons();
  }

  fetchLivraisons(): void {
    this.commandeservice.getAllCommandes().subscribe((data) => {
      this.commandes = data;
    });
  }
  changeEtat(commande:Commande): void {
    
    commande.etat = 'done';
    this.commandeservice.changeEtatCommande(commande._id, commande).subscribe(
      data=> commande=data
      );
  
}
}
