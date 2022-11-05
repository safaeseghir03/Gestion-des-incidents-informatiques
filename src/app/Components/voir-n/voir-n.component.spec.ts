import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirNComponent } from './voir-n.component';

describe('VoirNComponent', () => {
  let component: VoirNComponent;
  let fixture: ComponentFixture<VoirNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
