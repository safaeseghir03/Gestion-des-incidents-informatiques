import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditNtComponent } from './add-edit-nt.component';

describe('AddEditNtComponent', () => {
  let component: AddEditNtComponent;
  let fixture: ComponentFixture<AddEditNtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditNtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditNtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
