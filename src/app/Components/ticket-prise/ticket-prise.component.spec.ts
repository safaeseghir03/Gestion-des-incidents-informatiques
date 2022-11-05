import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketPriseComponent } from './ticket-prise.component';

describe('TicketPriseComponent', () => {
  let component: TicketPriseComponent;
  let fixture: ComponentFixture<TicketPriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketPriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketPriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
