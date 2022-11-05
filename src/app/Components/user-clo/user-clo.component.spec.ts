import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCloComponent } from './user-clo.component';

describe('UserCloComponent', () => {
  let component: UserCloComponent;
  let fixture: ComponentFixture<UserCloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
