import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDetailtComponent } from './add-edit-detailt.component';

describe('AddEditDetailtComponent', () => {
  let component: AddEditDetailtComponent;
  let fixture: ComponentFixture<AddEditDetailtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDetailtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDetailtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
