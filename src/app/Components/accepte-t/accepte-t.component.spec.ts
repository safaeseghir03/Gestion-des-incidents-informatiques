import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccepteTComponent } from './accepte-t.component';

describe('AccepteTComponent', () => {
  let component: AccepteTComponent;
  let fixture: ComponentFixture<AccepteTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccepteTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccepteTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
