import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketCloComponent } from './ticket-clo.component';

describe('TicketCloComponent', () => {
  let component: TicketCloComponent;
  let fixture: ComponentFixture<TicketCloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketCloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketCloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
