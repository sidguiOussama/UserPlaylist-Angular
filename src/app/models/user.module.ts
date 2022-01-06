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
    phone: string;
    email: string;
  }| undefined;
  address: {
    country: string;
    city: string;
    zipCode: string;
    address: string;
  }| undefined;
  role: string| undefined;
  playlists: Playlist[]| undefined;
  constructor(){}
}


