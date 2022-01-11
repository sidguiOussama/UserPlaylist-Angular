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
import { ListVideoPlaylistComponent } from './components/playlist/list-video-playlist/list-video-playlist.component';
import { ListAdvertUserComponent } from './components/advert/list-advert-user/list-advert-user.component';
import { AddAdvertUserDialogComponent } from './components/advert/add-advert-user-dialog/add-advert-user-dialog.component';
import { DetailsAdvertUserComponent } from './components/advert/details-advert-user/details-advert-user.component';
import {MatModule} from "./mat-module/mat-module.module";
import { TestStepperComponent } from './components/test-stepper/test-stepper.component';
import {MatButtonModule} from "@angular/material/button";
import {MatSliderModule} from "@angular/material/slider";
import { DisplayAdvertModalComponent } from './components/advert/display-advert-modal/display-advert-modal.component';
import { ProfilSettingComponent } from './components/user/profil-setting/profil-setting.component';
import {ChartsModule} from "ng2-charts";
import { ListAdvertsComponent } from './components/advert/list-adverts/list-adverts.component';
import { ListUsersComponent } from './components/user/list-users/list-users.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";



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
    DetailsAdvertUserComponent,
    TestStepperComponent,
    DisplayAdvertModalComponent,
    ProfilSettingComponent,
    ListAdvertsComponent,
    ListUsersComponent,
    UserDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatModule,
    MatButtonModule,
    MatSliderModule,
    ChartsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [SharedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
