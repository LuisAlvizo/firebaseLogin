import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTelComponent } from './login-tel.component';

describe('LoginTelComponent', () => {
  let component: LoginTelComponent;
  let fixture: ComponentFixture<LoginTelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginTelComponent]
    });
    fixture = TestBed.createComponent(LoginTelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
