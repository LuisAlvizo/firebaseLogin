import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpLoginComponent } from './op-login.component';

describe('OpLoginComponent', () => {
  let component: OpLoginComponent;
  let fixture: ComponentFixture<OpLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpLoginComponent]
    });
    fixture = TestBed.createComponent(OpLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
