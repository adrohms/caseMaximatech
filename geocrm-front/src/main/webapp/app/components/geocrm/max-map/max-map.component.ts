import { Component, Input, OnInit } from '@angular/core';
import { IAddress } from '../models/Address.model';

@Component({
  selector: 'max-map',
  templateUrl: './max-map.component.html',
  styleUrls: ['./max-map.component.scss']
})
export class MaxMapComponent implements OnInit {

  @Input() addresses?: IAddress[];

  ngOnInit(): void {
    console.log(this.addresses);
  }

}
