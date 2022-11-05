import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanifierTComponent } from './planifier-t.component';

describe('PlanifierTComponent', () => {
  let component: PlanifierTComponent;
  let fixture: ComponentFixture<PlanifierTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanifierTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanifierTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
