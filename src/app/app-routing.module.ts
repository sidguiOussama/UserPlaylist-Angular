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

const routes: Routes = [
  {path: 'signup' , component: SignupComponent },
  {path: 'login' , component: LoginComponent },
  {path: 'search' , component: SearchVideosComponent },
  {path: 'videoDetails' , component: VideoDetailsComponent},
  {path: 'myPlayList' , component: ListPlaylistComponent},
  {path: 'playlists/videos/:id' , component: ListVideoPlaylistComponent},
  {path: 'myAdverts' , component: ListAdvertUserComponent},
  {path: 'advert/:id' , component: DetailsAdvertUserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
