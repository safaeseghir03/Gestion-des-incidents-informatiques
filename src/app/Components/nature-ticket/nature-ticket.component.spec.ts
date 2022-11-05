import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatureTicketComponent } from './nature-ticket.component';

describe('NatureTicketComponent', () => {
  let component: NatureTicketComponent;
  let fixture: ComponentFixture<NatureTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NatureTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NatureTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
