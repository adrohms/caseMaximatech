import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IPage } from 'app/shared/types/page.interface';
import { Observable } from 'rxjs';

import { IPerson } from '../models/Person.model';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'max-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'name', 'taxId', 'code', 'email', 'phone'];
  public paginatedPersons$?: Observable<IPage<IPerson>>;
  public dataSource: any;

  constructor(private personService: PersonService) {}

  ngOnInit(): void {

    this.personService.persons$.subscribe(value => {
      if(value?.content != null && value.content.length > 0) {
        const personList: IPerson[] = value.content;
        this.dataSource = new MatTableDataSource(personList);
      }

    })

  }

}
