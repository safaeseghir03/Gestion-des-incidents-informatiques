import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatureTComponent } from './nature-t.component';

describe('NatureTComponent', () => {
  let component: NatureTComponent;
  let fixture: ComponentFixture<NatureTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NatureTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NatureTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
