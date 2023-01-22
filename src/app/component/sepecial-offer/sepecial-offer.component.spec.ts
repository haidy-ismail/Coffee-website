import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepecialOfferComponent } from './sepecial-offer.component';

describe('SepecialOfferComponent', () => {
  let component: SepecialOfferComponent;
  let fixture: ComponentFixture<SepecialOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SepecialOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SepecialOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
