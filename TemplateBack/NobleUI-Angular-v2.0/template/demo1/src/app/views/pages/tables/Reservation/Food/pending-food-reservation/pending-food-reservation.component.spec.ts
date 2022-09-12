import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingFoodReservationComponent } from './pending-food-reservation.component';

describe('PendingFoodReservationComponent', () => {
  let component: PendingFoodReservationComponent;
  let fixture: ComponentFixture<PendingFoodReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingFoodReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingFoodReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
