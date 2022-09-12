import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidFoodReservationComponent } from './valid-food-reservation.component';

describe('ValidFoodReservationComponent', () => {
  let component: ValidFoodReservationComponent;
  let fixture: ComponentFixture<ValidFoodReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidFoodReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidFoodReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
