import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnAttenteMerchantComponent } from './en-attente-merchant.component';

describe('EnAttenteMerchantComponent', () => {
  let component: EnAttenteMerchantComponent;
  let fixture: ComponentFixture<EnAttenteMerchantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnAttenteMerchantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnAttenteMerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
