import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { IPage } from 'app/shared/types/page.interface';

import { IAddress } from './models/Address.model';
import { IPerson } from './models/Person.model';
import { PersonService } from './services/person.service';

@Component({
  selector: 'max-geocrm',
  templateUrl: './geocrm.component.html',
  styleUrls: ['./geocrm.component.scss']
})
export class GeocrmComponent {

  @ViewChild(MatAccordion) accordion?: MatAccordion;

  public addresses?: IAddress[];

  constructor(private personService: PersonService) {}

  getPersons(persons: IPage<IPerson>): void {
    const addressList: IAddress[] = [];
    persons.content.forEach(person => {
      person.addresses?.forEach(address => {
        if(address.id != null) {
          addressList.push(address);
        }
      })
    })
    this.personService.setPaginatedPersons(persons);
  }
}
