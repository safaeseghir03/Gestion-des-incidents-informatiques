import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketEnCoursComponent } from './ticket-en-cours.component';

describe('TicketEnCoursComponent', () => {
  let component: TicketEnCoursComponent;
  let fixture: ComponentFixture<TicketEnCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketEnCoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketEnCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
