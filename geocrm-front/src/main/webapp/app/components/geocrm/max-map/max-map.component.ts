import { Component, OnInit } from '@angular/core';

import { IAddress } from '../models/Address.model';
import { IPosition, LtnLng, Position } from '../models/Position.model';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'max-map',
  templateUrl: './max-map.component.html',
  styleUrls: ['./max-map.component.scss']
})
export class MaxMapComponent implements OnInit {

  public clientePositions?: IPosition[] = [];

  constructor(
    private personService: PersonService
  ) {}

  ngOnInit(): void {
    this.personService.persons$.subscribe(paginatedPersons => {
      if(paginatedPersons?.content != null && paginatedPersons.content.length > 0) {
        paginatedPersons.content.forEach(person => {
          person.addresses?.forEach(address => {
            if(address.latitude != null && address.longitude != null && person.id != null) {
              this.clientePositions?.push(
                new Position(new LtnLng(address.latitude, address.longitude), person.id.toString())
              );
            }
          })

        })
      }

    })
  }

}
