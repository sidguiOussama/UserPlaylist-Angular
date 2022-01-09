import { Component, OnInit } from '@angular/core';
import {PlaylistService} from "../../../services/playlist.service";
import {User} from "../../../models/user.module";
import {MatDialog} from "@angular/material/dialog";
import {CreatePlaylistDialogComponent} from "../create-playlist-dialog/create-playlist-dialog.component";



@Component({
  selector: 'app-list-playlist',
  templateUrl: './list-playlist.component.html',
  styleUrls: ['./list-playlist.component.scss']
})
export class ListPlaylistComponent implements OnInit {


  playlists;
  user: User;
  constructor(private playlistService: PlaylistService, public dialog: MatDialog) { }

  ngOnInit(): void {

    this.user = JSON.parse(localStorage.getItem('credentials'));
    console.log(this.user);
    this.setRecord();
  }

  setRecord(){
    this.playlistService.getPlaylistsByUser(this.user.id).subscribe(
      (data) => {
        if(data.status != 'Error'){
          this.playlists = data.data.playlists;
          console.log(this.playlists);
        }
      }
    );
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CreatePlaylistDialogComponent, {
      width: '40%',
      height: '40%',
      data: {id: this.user.id},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result === 'ok'){
        this.setRecord();
      }
    });
  }


  deletePlayList(id) {
    alert(id);
      this.playlistService.deletePlaylistByUser(id).subscribe(
        (data:any)=> {
          if(data.status != 'Error') {
            this.setRecord();
          }
        }
      )
  }
}
