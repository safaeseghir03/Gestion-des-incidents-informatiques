import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarreTickComponent } from './barre-tick.component';

describe('BarreTickComponent', () => {
  let component: BarreTickComponent;
  let fixture: ComponentFixture<BarreTickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarreTickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarreTickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
