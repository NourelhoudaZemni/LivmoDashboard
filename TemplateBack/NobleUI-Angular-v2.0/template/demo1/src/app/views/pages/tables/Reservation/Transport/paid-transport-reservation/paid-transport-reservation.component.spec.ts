import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidTransportReservationComponent } from './paid-transport-reservation.component';

describe('PaidTransportReservationComponent', () => {
  let component: PaidTransportReservationComponent;
  let fixture: ComponentFixture<PaidTransportReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidTransportReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidTransportReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
