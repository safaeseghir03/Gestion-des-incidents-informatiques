import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionUserComponent } from './solution-user.component';

describe('SolutionUserComponent', () => {
  let component: SolutionUserComponent;
  let fixture: ComponentFixture<SolutionUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
