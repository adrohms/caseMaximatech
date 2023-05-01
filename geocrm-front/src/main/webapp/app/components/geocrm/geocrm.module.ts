import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';

import { GeocrmComponent } from './geocrm.component';
import { MaxMapComponent } from './max-map/max-map.component';
import { PersonFilterComponent } from './person-filter/person-filter.component';
import { PersonFormComponent } from './person-form/person-form.component';
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
    PersonFormComponent,
    PersonFilterComponent
  ]
})
export class GeocrmModule { }
