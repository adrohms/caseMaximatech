import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'max-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class PersonFormComponent implements OnInit {

  ngOnInit(): void {
    console.log("Ops!");
  }
}
