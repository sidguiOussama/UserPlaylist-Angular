import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVideoPlaylistComponent } from './list-video-playlist.component';

describe('ListVideoPlaylistComponent', () => {
  let component: ListVideoPlaylistComponent;
  let fixture: ComponentFixture<ListVideoPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVideoPlaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVideoPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
