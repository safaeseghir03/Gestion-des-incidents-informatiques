import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketEscComponent } from './ticket-esc.component';

describe('TicketEscComponent', () => {
  let component: TicketEscComponent;
  let fixture: ComponentFixture<TicketEscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketEscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketEscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
