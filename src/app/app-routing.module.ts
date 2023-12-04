import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./client/client.module').then((m) => m.ClientModule),
  },
  {
    path: 'fournisseur',
    loadChildren: () =>
      import('./fournisseur/fournisseur.module').then(
        (m) => m.FournisseurModule
      ),
  },
  {
    path: 'livreur',
    loadChildren: () =>
      import('./livreur/livreur.module').then((m) => m.LivreurModule),
  },
  { path: '**', redirectTo: '/erreur' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
