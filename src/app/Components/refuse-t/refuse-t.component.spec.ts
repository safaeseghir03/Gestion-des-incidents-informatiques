import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefuseTComponent } from './refuse-t.component';

describe('RefuseTComponent', () => {
  let component: RefuseTComponent;
  let fixture: ComponentFixture<RefuseTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefuseTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefuseTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
