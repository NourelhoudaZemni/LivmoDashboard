import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedHostComponent } from './verified-host.component';

describe('VerifiedHostComponent', () => {
  let component: VerifiedHostComponent;
  let fixture: ComponentFixture<VerifiedHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifiedHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifiedHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
