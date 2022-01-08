import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdvertUserDialogComponent } from './add-advert-user-dialog.component';

describe('AddAdvertUserDialogComponent', () => {
  let component: AddAdvertUserDialogComponent;
  let fixture: ComponentFixture<AddAdvertUserDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdvertUserDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdvertUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
