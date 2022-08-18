import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnAttenteHostComponent } from './en-attente-host.component';

describe('EnAttenteHostComponent', () => {
  let component: EnAttenteHostComponent;
  let fixture: ComponentFixture<EnAttenteHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnAttenteHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnAttenteHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
