import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedReservationsComponent } from './accepted-reservations.component';

describe('AcceptedReservationsComponent', () => {
  let component: AcceptedReservationsComponent;
  let fixture: ComponentFixture<AcceptedReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptedReservationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
