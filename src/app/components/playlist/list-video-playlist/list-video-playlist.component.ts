import { Component, OnInit } from '@angular/core';
import {PlaylistService} from "../../../services/playlist.service";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-list-video-playlist',
  templateUrl: './list-video-playlist.component.html',
  styleUrls: ['./list-video-playlist.component.scss']
})
export class ListVideoPlaylistComponent implements OnInit {

  videos = [];
  url: SafeUrl | undefined ;
  constructor(private playlistService: PlaylistService, private  route: ActivatedRoute,private sanitizer: DomSanitizer) { }
  ngOnInit(): void {
    let id =  this.route.snapshot.params.id;
    this.playlistService.getAllVideosByPlayList(id).subscribe(
      (data) => {
        if(data.status != "Error"){
          this.videos = data.data.videos;
          if(this.videos.length > 0) {
            this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.dailymotion.com/embed/video/' + this.videos[0].url + '?autoplay=1');
          }
          console.log(this.videos.length);
        }
      }
    )
  }

  clickTest(url: any) {
    alert(url);
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.dailymotion.com/embed/video/' + url + '?autoplay=1');
  }
}
