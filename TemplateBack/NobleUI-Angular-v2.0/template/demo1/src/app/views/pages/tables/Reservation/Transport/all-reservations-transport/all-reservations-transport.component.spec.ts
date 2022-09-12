import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllReservationsTransportComponent } from './all-reservations-transport.component';

describe('AllReservationsTransportComponent', () => {
  let component: AllReservationsTransportComponent;
  let fixture: ComponentFixture<AllReservationsTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllReservationsTransportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllReservationsTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
