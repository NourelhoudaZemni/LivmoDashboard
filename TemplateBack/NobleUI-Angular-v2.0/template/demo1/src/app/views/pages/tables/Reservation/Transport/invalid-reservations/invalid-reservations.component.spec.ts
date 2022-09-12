import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidReservationsComponent } from './invalid-reservations.component';

describe('InvalidReservationsComponent', () => {
  let component: InvalidReservationsComponent;
  let fixture: ComponentFixture<InvalidReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvalidReservationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
