import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirSComponent } from './voir-s.component';

describe('VoirSComponent', () => {
  let component: VoirSComponent;
  let fixture: ComponentFixture<VoirSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
