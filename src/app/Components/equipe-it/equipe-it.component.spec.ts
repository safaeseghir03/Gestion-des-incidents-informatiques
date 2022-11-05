import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeITComponent } from './equipe-it.component';

describe('EquipeITComponent', () => {
  let component: EquipeITComponent;
  let fixture: ComponentFixture<EquipeITComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipeITComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipeITComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
