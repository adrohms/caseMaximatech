import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'max-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {

  ngOnInit(): void {
    console.log("Ops!");
  }
}
