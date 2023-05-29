import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTelComponent } from './registro-tel.component';

describe('RegistroTelComponent', () => {
  let component: RegistroTelComponent;
  let fixture: ComponentFixture<RegistroTelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroTelComponent]
    });
    fixture = TestBed.createComponent(RegistroTelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
