/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxMapComponent } from './max-map.component';

describe('MaxMapComponent', () => {
  let component: MaxMapComponent;
  let fixture: ComponentFixture<MaxMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
