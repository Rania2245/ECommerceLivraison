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
  Commande!: Commande | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private commandeService: CommandeService
  ) {}

  ngOnInit(): void {
    const idcommande = this.activatedRoute.snapshot.params['id'];

    this.commandeService.getCommandeById(idcommande).subscribe((data) => {
      this.Commande = data;
    });
  }

  changeEtat(): void {
    if (this.Commande && this.Commande._id) {
      this.Commande.etat = 'livree';
      this.commandeService.changeEtatCommande(this.Commande._id, this.Commande);
    }
  }
}
