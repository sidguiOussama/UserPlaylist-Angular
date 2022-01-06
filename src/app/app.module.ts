import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SearchVideosComponent } from './components/youtube/search-videos/search-videos.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {HttpClientModule} from '@angular/common/http';
import { VideoDetailsComponent } from './components/youtube/video-details/video-details.component';
import {SharedDataService} from './services/shared-data.service';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './components/auth/login/login.component';
import { ListPlaylistComponent } from './components/playlist/list-playlist/list-playlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreatePlaylistDialogComponent } from './components/playlist/create-playlist-dialog/create-playlist-dialog.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import { ListVideoPlaylistComponent } from './components/playlist/list-video-playlist/list-video-playlist.component';
import { ListAdvertUserComponent } from './components/advert/list-advert-user/list-advert-user.component';
import { AddAdvertUserDialogComponent } from './components/advert/add-advert-user-dialog/add-advert-user-dialog.component';
import { DetailsAdvertUserComponent } from './components/advert/details-advert-user/details-advert-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    SearchVideosComponent,
    VideoDetailsComponent,
    LoginComponent,
    ListPlaylistComponent,
    CreatePlaylistDialogComponent,
    ListVideoPlaylistComponent,
    ListAdvertUserComponent,
    AddAdvertUserDialogComponent,
    DetailsAdvertUserComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,

  ],
  providers: [SharedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
