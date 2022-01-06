import {NgModule} from '@angular/core';

@NgModule()
export  class Playlist {
  id: string | undefined;
  name: string | undefined;
  dateCreation: Date | undefined;
  videos: [{
              url: string,
              title: string,
              description: string,
              hostname: string,
              thumbnails: string
  }]| undefined;

  constructor(){}
}
