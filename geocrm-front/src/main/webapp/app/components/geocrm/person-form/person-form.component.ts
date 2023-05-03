import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { PersonService } from '../services/person.service';
import { AlertService } from './../../../core/util/alert.service';
import { IPerson } from './../models/Person.model';



@Component({
  selector: 'max-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {

  public personForm: FormGroup = this.fb.group({
    id: [''],
    code: [''],
    name: [''],
    taxId: [''],
    email: [''],
    phone: ['']
  });

  public person: IPerson | null = null;
  public isToUpdate = false;

  constructor(
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private personService: PersonService,
    private alert: AlertService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({person}) => {
      if(person.id != null) { this.isToUpdate = true; }
      this.person = person;
      this.createFormFromPerson(person);
    })
  }

  createFormFromPerson(person: IPerson): void {
    this.personForm = this.fb.group({
      id: [person.id],
      code: [person.code],
      name: [person.name],
      taxId: [person.taxId],
      email: [person.email],
      phone: [person.phone]
    })
  }

  savePerson(): void {
    if (this.isToUpdate) {
      this.personService.update(this.personForm.value).subscribe({
        next: () => this.onSaveSuccess(),
        error: () => this.onSaveError()
    });
    } else {
      this.personService.create(this.personForm.value).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError()
    });
    }
  }

  cleanForm(): void {
    this.personForm.reset();
  }

  private onSaveSuccess(): void {
    this.alert.addAlert(
      {
          type: 'success',
          message: 'Cliente salvo com sucesso',
          timeout: 5000,
          toast: false
      });
  }

  private onSaveError(): void {
    this.alert.addAlert(
      {
          type: 'warning',
          message: 'Erro ao salvar o cliente',
          timeout: 5000,
          toast: false
      }
    );
  }
}
