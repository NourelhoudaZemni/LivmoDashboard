import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidReservationLodgingComponent } from './invalid-reservation-lodging.component';

describe('InvalidReservationLodgingComponent', () => {
  let component: InvalidReservationLodgingComponent;
  let fixture: ComponentFixture<InvalidReservationLodgingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvalidReservationLodgingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidReservationLodgingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
