import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeretatComponent } from './changeretat.component';

describe('ChangeretatComponent', () => {
  let component: ChangeretatComponent;
  let fixture: ComponentFixture<ChangeretatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeretatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeretatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
