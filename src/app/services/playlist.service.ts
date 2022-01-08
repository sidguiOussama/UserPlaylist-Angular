import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../models/user.module';


@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  url = environment.playlistUrl;

  constructor(private http: HttpClient) { }


  getPlaylistsByUser(id: string){
    return this.http.get<any>(this.url + '/user/'+id);
  }

  addPlaylistByUser(id: string, name: string){
    return this.http.post(this.url+'/playlist/'+id , {name: name});
  }

  deletePlaylistByUser(id: string){
    return this.http.delete(this.url+'/playlist/'+id );
  }

  getAllVideosByPlayList(id: string){
    return this.http.get<any>(this.url + '/videos/'+id);
  }

  addVideoByPlayList(id: string ,video: any) {
    return this.http.post(this.url+'/video/'+id , video);
  }




}
