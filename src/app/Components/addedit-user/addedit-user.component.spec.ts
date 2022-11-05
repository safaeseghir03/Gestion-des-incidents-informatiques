import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditUserComponent } from './addedit-user.component';

describe('AddeditUserComponent', () => {
  let component: AddeditUserComponent;
  let fixture: ComponentFixture<AddeditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
