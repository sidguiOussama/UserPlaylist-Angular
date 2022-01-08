import {NgModule} from '@angular/core';
import {Playlist} from './playlist.module';

@NgModule()
export class User {
  id: string| undefined;
  firstname: string| undefined;
  lastname: string| undefined;
  password: string| undefined;
  login: string| undefined;
  contact: {
    phone: string| undefined;
    email: string| undefined;
  }| undefined;
  address: {
    country: string| undefined;
    city: string| undefined;
    zipCode: string| undefined;
    address: string| undefined;
  }| undefined;
  role: string| undefined;
  playlists: Playlist[]| undefined;
  constructor(){}
}


