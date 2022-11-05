import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketTechComponent } from './ticket-tech.component';

describe('TicketTechComponent', () => {
  let component: TicketTechComponent;
  let fixture: ComponentFixture<TicketTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketTechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
