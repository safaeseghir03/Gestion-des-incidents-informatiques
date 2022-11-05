import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiderEscComponent } from './valider-esc.component';

describe('ValiderEscComponent', () => {
  let component: ValiderEscComponent;
  let fixture: ComponentFixture<ValiderEscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValiderEscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValiderEscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
