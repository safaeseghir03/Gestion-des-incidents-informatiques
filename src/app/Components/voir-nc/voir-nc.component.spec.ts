import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirNcComponent } from './voir-nc.component';

describe('VoirNcComponent', () => {
  let component: VoirNcComponent;
  let fixture: ComponentFixture<VoirNcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirNcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirNcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
