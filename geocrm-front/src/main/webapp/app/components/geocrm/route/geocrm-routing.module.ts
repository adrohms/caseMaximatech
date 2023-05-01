import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { GeocrmRoutingResolveService } from './geocrm-routing-resolve.service';
import { GeocrmComponent } from '../geocrm.component';
import { PersonFormComponent } from '../person-form/person-form.component';

const geocrmRoute: Routes = [
  {
    path: '',
    component: GeocrmComponent,
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'form',
    component: PersonFormComponent,
    resolve: {
      geocrm: GeocrmRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
    children: [
      {
        path: ':id',
        component: PersonFormComponent,
        resolve: {
          geocrm: GeocrmRoutingResolveService,
        }
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(geocrmRoute)],
  exports: [RouterModule],
})
export class GeocrmRoutingModule {}
