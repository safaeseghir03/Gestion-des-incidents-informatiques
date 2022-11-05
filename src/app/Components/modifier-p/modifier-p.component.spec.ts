import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierPComponent } from './modifier-p.component';

describe('ModifierPComponent', () => {
  let component: ModifierPComponent;
  let fixture: ComponentFixture<ModifierPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
