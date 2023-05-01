import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'max-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {



  ngOnInit(): void {
    console.log("Nah");
  }

}
