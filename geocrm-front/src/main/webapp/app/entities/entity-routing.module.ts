import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'geo-crm',
        data: { pageTitle: 'Geo CRM'},
        loadChildren: () => import('./crm/geocrm.module').then(m => m.GeocrmModule),
      },
    ]),
  ],
})
export class EntityRoutingModule {}
