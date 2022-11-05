import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketGestComponent } from './ticket-gest.component';

describe('TicketGestComponent', () => {
  let component: TicketGestComponent;
  let fixture: ComponentFixture<TicketGestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketGestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketGestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
