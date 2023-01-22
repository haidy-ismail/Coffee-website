import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesPagesComponent } from './services-pages.component';

describe('ServicesPagesComponent', () => {
  let component: ServicesPagesComponent;
  let fixture: ComponentFixture<ServicesPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
