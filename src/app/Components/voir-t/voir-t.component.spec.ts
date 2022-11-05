import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirTComponent } from './voir-t.component';

describe('VoirTComponent', () => {
  let component: VoirTComponent;
  let fixture: ComponentFixture<VoirTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
