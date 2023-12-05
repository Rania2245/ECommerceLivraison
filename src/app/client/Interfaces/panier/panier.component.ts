import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Classes/produit';
import { Commande } from 'src/app/Classes/commande';
import { CommandeService } from 'src/app/Services/commande-service';
import { Client } from 'src/app/Classes/client';
import { ClientService } from 'src/app/Services/client-service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent implements OnInit {
  constructor(private ClientService: ClientService) {}
  panier: Product[] = [];

  ngOnInit(): void {
    this.initPanier();
  }

  initPanier() {
    const jsonPanier = localStorage.getItem('panier');
    if (jsonPanier !== null) this.panier = JSON.parse(jsonPanier);
    else this.panier = [];
  }

  supprimerProduit(index: number) {
    const jsonPanier = localStorage.getItem('panier');
    if (jsonPanier !== null) {
      const parsedPanier = JSON.parse(jsonPanier);
      parsedPanier.splice(index, 1);
      localStorage.setItem('panier', JSON.stringify(parsedPanier));
      this.initPanier();
    }
  }

  calculerTotal(): number {
    return this.panier.reduce((acc, produit) => acc + produit.price, 0);
  }

  commander() {
    const newCommande: Commande = {
      _id: undefined,
      num_commande: 0,
      etat: 'En cours',
      client: new Client(
        '',
        '',
        '',
        '',
        '',
        { ville: '', region: '', rue: '', poste: '' },
        []
      ),
      date: new Date(),
      lignCommandes: [],
      produits: this.panier.map((element) => ({ _id: element._id!, qte: 1 })),
    };

    this.ClientService.addCommande(newCommande).subscribe((commande) => {
      console.log('Commande ajoutée avec succès:', commande);
       localStorage.removeItem('panier');
       this.panier = [];
    },
     error=> alert("vous n'êtes pas authentifié ") 
    );
  }
}
