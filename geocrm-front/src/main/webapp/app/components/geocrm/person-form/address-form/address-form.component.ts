import { Component, Input, OnInit } from '@angular/core';
import { IAddress } from '../../models/Address.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'max-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {

  @Input() address?: IAddress;

  public addressForm: FormGroup = this.fb.group({
    id: [''],
    street: [''],
    sector: [''],
    city: [''],
    state: [''],
    latitude: [''],
    longitude: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createFormFromAddress(this.address);
  }

  createFormFromAddress(address?: IAddress): void {
    this.addressForm = this.fb.group({
      id: [address?.id ?? ''],
      street: [address?.street ?? ''],
      sector: [address?.sector ?? ''],
      city: [address?.city ?? ''],
      state: [address?.state ?? ''],
      latitude: [address?.latitude ?? ''],
      longitude: [address?.longitude ?? '']
    })
  }

}
