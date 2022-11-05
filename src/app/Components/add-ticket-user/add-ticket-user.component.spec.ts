import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTicketUserComponent } from './add-ticket-user.component';

describe('AddTicketUserComponent', () => {
  let component: AddTicketUserComponent;
  let fixture: ComponentFixture<AddTicketUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTicketUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTicketUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
