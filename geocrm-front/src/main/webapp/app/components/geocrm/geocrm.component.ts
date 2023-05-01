import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'max-geocrm',
  templateUrl: './geocrm.component.html',
  styleUrls: ['./geocrm.component.scss']
})
export class GeocrmComponent implements OnInit {
  @ViewChild(MatAccordion) accordion?: MatAccordion;

  ngOnInit(): void {
    console.log("Ops!");
  }

}
