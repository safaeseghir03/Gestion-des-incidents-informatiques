import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketAprComponent } from './ticket-apr.component';

describe('TicketAprComponent', () => {
  let component: TicketAprComponent;
  let fixture: ComponentFixture<TicketAprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketAprComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketAprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
