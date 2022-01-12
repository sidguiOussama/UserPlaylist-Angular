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
  videoPlay;
  url: SafeUrl | undefined ;
  constructor(private playlistService: PlaylistService, private  route: ActivatedRoute,private sanitizer: DomSanitizer) { }
  ngOnInit(): void {
    let id =  this.route.snapshot.params.id;
    this.playlistService.getAllVideosByPlayList(id).subscribe(
      (data) => {
        if(data.status != "Error"){
          this.videos = data.data.videos;
          if(this.videos.length > 0) {
            if(this.videos[0].hostname == 'dailymotion'){
              this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.dailymotion.com/embed/video/' + this.videos[0].url + '?autoplay=1');
            }else if(this.videos[0].hostname == 'youtube'){
              this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.videos[0].url + '?autoplay=1');
            }
            this.videoPlay = this.videos[0];
          }
          console.log(this.videos.length);
        }
      }
    )
  }

  clickTest(video: any) {
    if(video.hostname == 'dailymotion'){
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.dailymotion.com/embed/video/' + video.url + '?autoplay=1');
    }else if(video.hostname == 'youtube'){
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video.url + '?autoplay=1');
    }

    this.videoPlay = video;
  }
}
