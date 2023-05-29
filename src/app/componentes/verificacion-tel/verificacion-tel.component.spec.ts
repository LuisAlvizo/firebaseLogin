import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificacionTelComponent } from './verificacion-tel.component';

describe('VerificacionTelComponent', () => {
  let component: VerificacionTelComponent;
  let fixture: ComponentFixture<VerificacionTelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerificacionTelComponent]
    });
    fixture = TestBed.createComponent(VerificacionTelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
