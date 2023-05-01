import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';

import { ClientFilterComponent } from './client-filter/client-filter.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { GeocrmComponent } from './geocrm.component';
import { MaxMapComponent } from './max-map/max-map.component';
import { GeocrmRoutingModule } from './route/geocrm-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GeocrmRoutingModule
  ],
  declarations: [
    GeocrmComponent,
    MaxMapComponent,
    ClientFormComponent,
    ClientFilterComponent
  ]
})
export class GeocrmModule { }
