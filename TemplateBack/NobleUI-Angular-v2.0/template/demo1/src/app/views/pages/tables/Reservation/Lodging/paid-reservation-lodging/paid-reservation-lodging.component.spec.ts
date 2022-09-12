import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidReservationLodgingComponent } from './paid-reservation-lodging.component';

describe('PaidReservationLodgingComponent', () => {
  let component: PaidReservationLodgingComponent;
  let fixture: ComponentFixture<PaidReservationLodgingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidReservationLodgingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidReservationLodgingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
