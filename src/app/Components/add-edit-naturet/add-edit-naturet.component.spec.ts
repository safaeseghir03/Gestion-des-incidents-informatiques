import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditNaturetComponent } from './add-edit-naturet.component';

describe('AddEditNaturetComponent', () => {
  let component: AddEditNaturetComponent;
  let fixture: ComponentFixture<AddEditNaturetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditNaturetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditNaturetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
