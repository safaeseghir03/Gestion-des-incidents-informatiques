import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiderAprComponent } from './valider-apr.component';

describe('ValiderAprComponent', () => {
  let component: ValiderAprComponent;
  let fixture: ComponentFixture<ValiderAprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValiderAprComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValiderAprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
