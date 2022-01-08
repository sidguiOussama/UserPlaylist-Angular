import { Component, OnInit } from '@angular/core';
import {SharedDataService} from '../../../services/shared-data.service';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import {FormBuilder, FormGroup} from "@angular/forms";
import {PlaylistService} from "../../../services/playlist.service";
import { interval, Subscription } from 'rxjs';
import {MatDialog} from "@angular/material/dialog";
import {AddAdvertUserDialogComponent} from "../../advert/add-advert-user-dialog/add-advert-user-dialog.component";
import {DisplayAdvertModalComponent} from "../../advert/display-advert-modal/display-advert-modal.component";

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {

  url: SafeUrl | undefined ;
  message: any;
  selectedOption;
  playlists = [];
  user;
  subscription: Subscription;
  myInterval;
  constructor(private sharedDataService: SharedDataService, private sanitizer: DomSanitizer,
              private playlistService: PlaylistService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.setIntreval();
    this.sharedDataService.sharedMessage.subscribe(
      (message: any) => {
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.dailymotion.com/embed/video/' + message.id + '?autoplay=1');
        this.message = message;
        console.log(this.message);
        this.user = JSON.parse(localStorage.getItem('credentials'));
        this.playlistService.getPlaylistsByUser(this.user.id).subscribe(
          (data)=> {
            if(data != 'Error') {
              this.playlists = data.data.playlists;
            }
          }
        )
      });
  }

  setIntreval(){
    this.myInterval = setInterval(() => {
      this.openDialog();
    }, 5000);
  }
  ngOnDestroy() {
    if (this.myInterval) {
      clearInterval(this.myInterval);
    }
  }

  addToPlaylist() {
    alert(this.selectedOption);
    let video = {
      url : this.message.id,
      title: this.message.title,
      description : this.message.description,
      hostname: "DailyMotion",
      thumbnails : this.message.thumbnail_720_url,
    }
    this.playlistService.addVideoByPlayList(this.selectedOption,video).subscribe(
      (data:any) => {
        if(data.status != 'Error') {
          console.log(data);
          alert('ok');
        }
      }
    )
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DisplayAdvertModalComponent, {
      width: '60%',
      height: '40%',
      data: {id: this.user.id},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result === 'ok'){
       console.log('ok');
      }
    });
  }


}
