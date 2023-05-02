import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';

import { GeocrmComponent } from './geocrm.component';
import { MaxMapComponent } from './max-map/max-map.component';
import { PersonFilterComponent } from './person-filter/person-filter.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { PersonListComponent } from './person-list/person-list.component';
import { GeocrmRoutingModule } from './route/geocrm-routing.module';
import { AddressFormComponent } from './person-form/address-form/address-form.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GeocrmRoutingModule
  ],
  declarations: [
    GeocrmComponent,
    MaxMapComponent,
    PersonFormComponent,
    PersonFilterComponent,
    PersonListComponent,
    AddressFormComponent
  ]
})
export class GeocrmModule { }
