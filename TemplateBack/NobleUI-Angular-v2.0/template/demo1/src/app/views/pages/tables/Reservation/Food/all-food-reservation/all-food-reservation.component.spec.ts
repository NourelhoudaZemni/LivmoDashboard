import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFoodReservationComponent } from './all-food-reservation.component';

describe('AllFoodReservationComponent', () => {
  let component: AllFoodReservationComponent;
  let fixture: ComponentFixture<AllFoodReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFoodReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFoodReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
