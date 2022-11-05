import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprobSolComponent } from './addprob-sol.component';

describe('AddprobSolComponent', () => {
  let component: AddprobSolComponent;
  let fixture: ComponentFixture<AddprobSolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprobSolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprobSolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
