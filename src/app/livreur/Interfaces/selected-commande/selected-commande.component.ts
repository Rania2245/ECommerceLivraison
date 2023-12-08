import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Commande } from 'src/app/Classes/commande';
import { LignCommande } from 'src/app/Classes/ligneCommende';
import { Product } from 'src/app/Classes/produit';
import { CommandeService } from 'src/app/Services/commande-service';

@Component({
  selector: 'app-selected-commande',
  templateUrl: './selected-commande.component.html',
  styleUrls: ['./selected-commande.component.css'],
})
export class SelectedCommandeComponent implements OnInit {
  commande!: Commande;
   idcommande!:string
  constructor(
    private activatedRoute: ActivatedRoute,
    private commandeService: CommandeService
  ) {}

  ngOnInit(): void {
     this.idcommande = this.activatedRoute.snapshot.params['id'];

    this.commandeService.getCommandeById(this.idcommande).subscribe((data) => {
      this.commande = data;
    });
  }

  changeEtat(): void {
    
      this.commande.etat = 'done';
      this.commandeService.changeEtatCommande(this.idcommande, this.commande).subscribe(
        data=> this.commande=data
        );
        
    
  }
}
