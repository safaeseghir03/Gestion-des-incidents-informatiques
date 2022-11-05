import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloturUserComponent } from './clotur-user.component';

describe('CloturUserComponent', () => {
  let component: CloturUserComponent;
  let fixture: ComponentFixture<CloturUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloturUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloturUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
