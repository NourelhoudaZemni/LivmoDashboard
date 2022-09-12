import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidFoodReservationComponent } from './paid-food-reservation.component';

describe('PaidFoodReservationComponent', () => {
  let component: PaidFoodReservationComponent;
  let fixture: ComponentFixture<PaidFoodReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidFoodReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidFoodReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
