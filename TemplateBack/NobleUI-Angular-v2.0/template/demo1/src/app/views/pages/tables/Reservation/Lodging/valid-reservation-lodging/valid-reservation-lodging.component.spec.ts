import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidReservationLodgingComponent } from './valid-reservation-lodging.component';

describe('ValidReservationLodgingComponent', () => {
  let component: ValidReservationLodgingComponent;
  let fixture: ComponentFixture<ValidReservationLodgingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidReservationLodgingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidReservationLodgingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
