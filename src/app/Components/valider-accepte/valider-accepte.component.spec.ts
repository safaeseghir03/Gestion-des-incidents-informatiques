import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiderAccepteComponent } from './valider-accepte.component';

describe('ValiderAccepteComponent', () => {
  let component: ValiderAccepteComponent;
  let fixture: ComponentFixture<ValiderAccepteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValiderAccepteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValiderAccepteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
