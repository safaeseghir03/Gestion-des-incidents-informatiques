import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditserviceComponent } from './add-editservice.component';

describe('AddEditserviceComponent', () => {
  let component: AddEditserviceComponent;
  let fixture: ComponentFixture<AddEditserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
