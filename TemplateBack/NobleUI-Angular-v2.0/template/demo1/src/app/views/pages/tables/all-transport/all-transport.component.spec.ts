import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTransportComponent } from './all-transport.component';

describe('AllTransportComponent', () => {
  let component: AllTransportComponent;
  let fixture: ComponentFixture<AllTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTransportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
