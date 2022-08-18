import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLodgingComponent } from './all-lodging.component';

describe('AllLodgingComponent', () => {
  let component: AllLodgingComponent;
  let fixture: ComponentFixture<AllLodgingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLodgingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLodgingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
