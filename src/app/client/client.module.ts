import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterClientComponent } from './Interfaces/registerCl/register-client.component';
import { ListCommandeComponent } from './Interfaces/listCommandes/list-commande.component';
import { NavbarComponent } from './Interfaces/navbar/navbar.component';
import { DetailsCommandeComponent } from './Interfaces/detailsCommande/details-commande.component';



@NgModule({
  declarations: [
    RegisterClientComponent,
    ListCommandeComponent,
    DetailsCommandeComponent,
    
  ],
  imports: [CommonModule, ClientRoutingModule, FormsModule,
    ReactiveFormsModule,],
})
export class ClientModule {}
