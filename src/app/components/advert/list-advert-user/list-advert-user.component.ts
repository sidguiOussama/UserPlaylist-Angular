import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/user.module";
import {AdvertService} from "../../../services/advert.service";
import {Advert} from "../../../models/advert.module";
import {MatDialog} from "@angular/material/dialog";
import {CreatePlaylistDialogComponent} from "../../playlist/create-playlist-dialog/create-playlist-dialog.component";
import {AddAdvertUserDialogComponent} from "../add-advert-user-dialog/add-advert-user-dialog.component";

@Component({
  selector: 'app-list-advert-user',
  templateUrl: './list-advert-user.component.html',
  styleUrls: ['./list-advert-user.component.scss']
})
export class ListAdvertUserComponent implements OnInit {

  user: User;
  adverts: Advert[]= [];
  constructor(private advertService: AdvertService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('credentials'));
    console.log(this.user);
    this.setRecord();
  }

  setRecord(){
    this.advertService.getAllAdsByUser(this.user.id).subscribe(
      (data:any) => {
        if(data.status != 'Error'){
          this.adverts = data.data.adverts;
          console.log(this.adverts);
        }
      }
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddAdvertUserDialogComponent, {
      width: '70%',
      height: '80%',
      data: {id: this.user.id},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result === 'ok'){
        this.setRecord();
      }
    });
  }

  deleteAdvert(id) {
    alert(id);
    this.advertService.deleteAdsByUser(id).subscribe(
      (data:any)=> {
        if(data.status != 'Error') {
          this.setRecord();
        }
      }
    )
  }

}
