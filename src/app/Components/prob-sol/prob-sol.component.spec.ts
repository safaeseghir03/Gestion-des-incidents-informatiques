import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbSolComponent } from './prob-sol.component';

describe('ProbSolComponent', () => {
  let component: ProbSolComponent;
  let fixture: ComponentFixture<ProbSolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProbSolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProbSolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
