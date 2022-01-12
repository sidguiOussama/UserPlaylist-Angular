import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from './components/auth/signup/signup.component';
import {SearchVideosComponent} from './components/youtube/search-videos/search-videos.component';
import {VideoDetailsComponent} from './components/youtube/video-details/video-details.component';
import {LoginComponent} from "./components/auth/login/login.component";
import {ListPlaylistComponent} from "./components/playlist/list-playlist/list-playlist.component";
import {ListVideoPlaylistComponent} from "./components/playlist/list-video-playlist/list-video-playlist.component";
import {ListAdvertUserComponent} from "./components/advert/list-advert-user/list-advert-user.component";
import {DetailsAdvertUserComponent} from "./components/advert/details-advert-user/details-advert-user.component";
import {TestStepperComponent} from "./components/test-stepper/test-stepper.component";
import {ProfilSettingComponent} from "./components/user/profil-setting/profil-setting.component";
import {ListUsersComponent} from "./components/user/list-users/list-users.component";
import {UserDetailsComponent} from "./components/user/user-details/user-details.component";
import {AuthGuard} from "./Guard/auth.guard";

const routes: Routes = [
  {path: 'signup' , component: SignupComponent },
  {path: 'login' , component: LoginComponent },
  {path: 'users' , component: ListUsersComponent,canActivate:[AuthGuard], data:{role: ['admin']} },
  {path: 'Settings/:id' , component: ProfilSettingComponent ,canActivate:[AuthGuard]},
  {path: 'user/:id' , component: UserDetailsComponent ,canActivate:[AuthGuard],data:{role: ['admin']}},
  {path: 'search' , component: SearchVideosComponent ,canActivate:[AuthGuard]},
  {path: 'videoDetails' , component: VideoDetailsComponent,canActivate:[AuthGuard]},
  {path: 'myPlayList' , component: ListPlaylistComponent,canActivate:[AuthGuard],data:{role: ['user']}},
  {path: 'playlists/videos/:id' , component: ListVideoPlaylistComponent,canActivate:[AuthGuard],data:{role: ['user']}},
  {path: 'myAdverts' , component: ListAdvertUserComponent,canActivate:[AuthGuard],data:{role: ['advert']}},
  {path: 'advert/:id' , component: DetailsAdvertUserComponent,canActivate:[AuthGuard],data:{role: ['admin','advert']}},
  {path: 'step' , component: TestStepperComponent,canActivate:[AuthGuard]},
  { path: '**', redirectTo: 'login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
