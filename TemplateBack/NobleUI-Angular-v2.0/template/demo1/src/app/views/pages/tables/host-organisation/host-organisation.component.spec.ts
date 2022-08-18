import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostOrganisationComponent } from './host-organisation.component';

describe('HostOrganisationComponent', () => {
  let component: HostOrganisationComponent;
  let fixture: ComponentFixture<HostOrganisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostOrganisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostOrganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
