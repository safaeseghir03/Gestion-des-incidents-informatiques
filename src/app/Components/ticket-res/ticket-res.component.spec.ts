import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketResComponent } from './ticket-res.component';

describe('TicketResComponent', () => {
  let component: TicketResComponent;
  let fixture: ComponentFixture<TicketResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketResComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
