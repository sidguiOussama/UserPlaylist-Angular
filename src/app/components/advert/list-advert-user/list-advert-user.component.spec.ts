import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdvertUserComponent } from './list-advert-user.component';

describe('ListAdvertUserComponent', () => {
  let component: ListAdvertUserComponent;
  let fixture: ComponentFixture<ListAdvertUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAdvertUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAdvertUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
