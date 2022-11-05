import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SansRtComponent } from './sans-rt.component';

describe('SansRtComponent', () => {
  let component: SansRtComponent;
  let fixture: ComponentFixture<SansRtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SansRtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SansRtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
