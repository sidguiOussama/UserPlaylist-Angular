import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAdvertUserComponent } from './details-advert-user.component';

describe('DetailsAdvertUserComponent', () => {
  let component: DetailsAdvertUserComponent;
  let fixture: ComponentFixture<DetailsAdvertUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAdvertUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsAdvertUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
