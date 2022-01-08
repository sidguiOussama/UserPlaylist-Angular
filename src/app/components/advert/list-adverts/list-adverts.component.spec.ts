import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdvertsComponent } from './list-adverts.component';

describe('ListAdvertsComponent', () => {
  let component: ListAdvertsComponent;
  let fixture: ComponentFixture<ListAdvertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAdvertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAdvertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
