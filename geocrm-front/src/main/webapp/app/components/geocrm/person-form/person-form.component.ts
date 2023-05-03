import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'max-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {

  public id?: string | null;

  personForm = this.fb.group({
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
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  savePerson(): void {
    this.personService;
  }

  cleanForm(): void {
    this.personForm.reset();
  }
}
