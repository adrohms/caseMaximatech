import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { IPerson } from '../models/Person.model';
import { PersonService } from '../services/person.service';
import { Router } from '@angular/router';
import { AlertService } from 'app/core/util/alert.service';
import { IPage } from 'app/shared/types/page.interface';

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

  @Output() loadPersonsRequest = new EventEmitter();

  constructor(
    private personService: PersonService,
    private router: Router,
    private alert: AlertService
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
    this.router.navigate(['/geo-crm/form/new']);
  }

  editPerson(person: IPerson): void {
    this.router.navigate([`/geo-crm/form/${person.id!.toString()}`])
  }

  deletePerson(person: IPerson): void {
    if(person.id) {
      this.personService.delete(person.id).subscribe({
        next: () => {
          this.onSaveSuccess();
          let personsWithoutRemoved: IPage<IPerson> | null = null;
          this.personService.persons$.subscribe(persons => {
            if(persons) {
              personsWithoutRemoved = persons;
              personsWithoutRemoved.content = persons.content.filter(content => content.id !== person.id);

            }
          })
          this.personService.setPaginatedPersons(personsWithoutRemoved!);
        },
        error: () => this.onSaveError()
      });
    }
  }

  private onSaveSuccess(): void {
    this.alert.addAlert(
      {
          type: 'success',
          message: 'Cliente deletado com sucesso!',
          timeout: 5000,
          toast: false
      });
  }

  private onSaveError(): void {
    this.alert.addAlert(
      {
          type: 'warning',
          message: 'Erro ao deletar o cliente',
          timeout: 5000,
          toast: false
      }
    );
  }

}
