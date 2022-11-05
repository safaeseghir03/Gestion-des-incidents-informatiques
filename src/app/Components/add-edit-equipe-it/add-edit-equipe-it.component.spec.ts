import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEquipeItComponent } from './add-edit-equipe-it.component';

describe('AddEditEquipeItComponent', () => {
  let component: AddEditEquipeItComponent;
  let fixture: ComponentFixture<AddEditEquipeItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditEquipeItComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditEquipeItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
