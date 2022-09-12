import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingReservationLodgingComponent } from './pending-reservation-lodging.component';

describe('PendingReservationLodgingComponent', () => {
  let component: PendingReservationLodgingComponent;
  let fixture: ComponentFixture<PendingReservationLodgingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingReservationLodgingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingReservationLodgingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
