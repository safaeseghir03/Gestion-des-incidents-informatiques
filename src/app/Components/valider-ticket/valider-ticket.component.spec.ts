import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiderTicketComponent } from './valider-ticket.component';

describe('ValiderTicketComponent', () => {
  let component: ValiderTicketComponent;
  let fixture: ComponentFixture<ValiderTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValiderTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValiderTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
