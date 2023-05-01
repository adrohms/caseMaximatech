import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { GeocrmRoutingResolveService } from './geocrm-routing-resolve.service';
import { GeocrmComponent } from '../geocrm.component';
import { ClientFormComponent } from '../client-form/client-form.component';

const geocrmRoute: Routes = [
  {
    path: '',
    component: GeocrmComponent,
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id',
    component: ClientFormComponent,
    resolve: {
      geocrm: GeocrmRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  }
];

@NgModule({
  imports: [RouterModule.forChild(geocrmRoute)],
  exports: [RouterModule],
})
export class GeocrmRoutingModule {}
