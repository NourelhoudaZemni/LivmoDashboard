import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidFoodReservationComponent } from './invalid-food-reservation.component';

describe('InvalidFoodReservationComponent', () => {
  let component: InvalidFoodReservationComponent;
  let fixture: ComponentFixture<InvalidFoodReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvalidFoodReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidFoodReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
