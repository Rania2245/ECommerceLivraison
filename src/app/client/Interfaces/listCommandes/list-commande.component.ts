import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/Classes/client';
import { Commande } from 'src/app/Classes/commande';
import { ClientService } from 'src/app/Services/client-service';

@Component({
  selector: 'app-list-commande',
  templateUrl: './list-commande.component.html',
  styleUrls: ['./list-commande.component.css']
})
export class ListCommandeComponent implements OnInit {
data !: string;
client!: Client;
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.data = localStorage.getItem('user')||'';
   this.clientService.getClientById(this.data).subscribe(
    data=>{this.client=data
      console.log(this.client);
    }
   )
    
    
  }

}
