import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllReservationsLodgingComponent } from './all-reservations-lodging.component';

describe('AllReservationsLodgingComponent', () => {
  let component: AllReservationsLodgingComponent;
  let fixture: ComponentFixture<AllReservationsLodgingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllReservationsLodgingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllReservationsLodgingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
