import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Commande } from 'src/app/Classes/commande';
import { CommandeService } from 'src/app/Services/commande-service';

@Component({
  selector: 'app-details-commande',
  templateUrl: './details-commande.component.html',
  styleUrls: ['./details-commande.component.css'],
})
export class DetailsCommandeComponent implements OnInit {
  id!: string;
  commande!: Commande;
  constructor(
    private activatedRoute: ActivatedRoute,
    private commandeService: CommandeService,
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.commandeService.getCommandeById(this.id).subscribe((data) => {
      this.commande = data;
      console.log(this.commande);
    });
  }
}
