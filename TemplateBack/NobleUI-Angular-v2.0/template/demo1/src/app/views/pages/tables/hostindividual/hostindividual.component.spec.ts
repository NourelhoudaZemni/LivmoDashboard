import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostindividualComponent } from './hostindividual.component';

describe('HostindividualComponent', () => {
  let component: HostindividualComponent;
  let fixture: ComponentFixture<HostindividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostindividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostindividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
