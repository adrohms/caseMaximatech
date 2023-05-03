import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { IPerson } from '../models/Person.model';
import { PersonService } from '../services/person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'max-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'name', 'taxId', 'code', 'email', 'phone', 'options'];

  public dataSource: any;
  public length = 50;
  public pageSize = 10;
  public pageIndex = 0;
  public pageSizeOptions = [5, 10, 25];

  public hidePageSize = false;
  public showPageSizeOptions = true;
  public showFirstLastButtons = true;
  public disabled = false;

  public pageEvent?: PageEvent;

  constructor(
    private personService: PersonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.personService.persons$.subscribe(value => {
      if(value?.content != null && value.content.length > 0) {
        const personList: IPerson[] = value.content;
        this.dataSource = new MatTableDataSource(personList);
      }
    })
  }

  handlePageEvent(pageEvent: PageEvent): void {
    this.pageEvent = pageEvent;
    this.length = pageEvent.length;
    this.pageSize = pageEvent.pageSize;
    this.pageIndex = pageEvent.pageIndex;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string): void {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  createPerson(): void {
    this.router.navigate(['/geo-crm/form/']);
  }

  editPerson(person: IPerson): void {
    this.router.navigate([`/geo-crm/form/${person.id!.toString()}`])
  }

  deletePerson(person: IPerson): void {
    this.personService
  }

}
