import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PlaylistService} from "../../../services/playlist.service";


@Component({
  selector: 'app-create-playlist-dialog',
  templateUrl: './create-playlist-dialog.component.html',
  styleUrls: ['./create-playlist-dialog.component.scss']
})
export class CreatePlaylistDialogComponent implements OnInit {

  id;
  name=''
  constructor(
    private playlistService: PlaylistService,
    public dialogRef: MatDialogRef<CreatePlaylistDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit() {
    this.id = this.data.id;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onClick(): void {
    this.playlistService.addPlaylistByUser(this.id, this.name).subscribe(
      (data:any) => {
        if(data.status != 'Error'){
          this.dialogRef.close('ok');
        }
      }
    )
  }


}
