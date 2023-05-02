import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { PersonService } from '../services/person.service';
import { IPerson } from '../models/Person.model';
import { IPage } from 'app/shared/types/page.interface';


@Component({
  selector: 'max-person-filter',
  templateUrl: './person-filter.component.html',
  styleUrls: ['./person-filter.component.scss']
})
export class PersonFilterComponent implements OnInit {

  @Output() personsOnFilter = new EventEmitter<IPage<IPerson>>();
  public id?: string | null;

  personFilterForm = this.fb.group({
    id: [''],
    code: [''],
    name: [''],
    taxId: [''],
    email: [''],
    phone: ['']
  })

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private personService: PersonService
  ) {}

  ngOnInit(): void {
    this.applyFilter();
  }

  applyFilter(): void {
    const params = this.createParamFromForm();
    this.personService.findAllPersons(params).subscribe(persons => {
      this.personsOnFilter.emit(persons);
     }
    )
  }

  cleanFilter(): void {
    this.personFilterForm;
  }

  private createParamFromForm(): HttpParams {
    const person = this.personFilterForm.value;
    return new HttpParams()
      .set('id', person.id ?? '')
      .set('code', person.code ?? '')
      .set('name', person.name ?? '')
      .set('taxId', person.taxId ?? '')
      .set('email', person.email ?? '')
      .set('phone', person.phone ?? '')
  }
}
