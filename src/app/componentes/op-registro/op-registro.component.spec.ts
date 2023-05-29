import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpRegistroComponent } from './op-registro.component';

describe('OpRegistroComponent', () => {
  let component: OpRegistroComponent;
  let fixture: ComponentFixture<OpRegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpRegistroComponent]
    });
    fixture = TestBed.createComponent(OpRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
