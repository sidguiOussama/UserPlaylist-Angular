import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAdvertModalComponent } from './display-advert-modal.component';

describe('DisplayAdvertModalComponent', () => {
  let component: DisplayAdvertModalComponent;
  let fixture: ComponentFixture<DisplayAdvertModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAdvertModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAdvertModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
