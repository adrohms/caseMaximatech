import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'max-person-filter',
  templateUrl: './person-filter.component.html',
  styleUrls: ['./person-filter.component.scss']
})
export class PersonFilterComponent implements OnInit {

  ngOnInit(): void {
    console.log("Ops!");
  }
}
