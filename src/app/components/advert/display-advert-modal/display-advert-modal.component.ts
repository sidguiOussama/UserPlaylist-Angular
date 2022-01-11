import {Component, Inject, OnInit} from '@angular/core';
import {AdvertService} from "../../../services/advert.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Advert} from "../../../models/advert.module";
import {AngularFireStorage} from "@angular/fire/storage";

@Component({
  selector: 'app-display-advert-modal',
  templateUrl: './display-advert-modal.component.html',
  styleUrls: ['./display-advert-modal.component.scss']
})
export class DisplayAdvertModalComponent implements OnInit {

  constructor(
              private storage: AngularFireStorage,
              private advertService: AdvertService,
              public dialogRef: MatDialogRef<DisplayAdvertModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  advert: Advert;
  imageAdvert;
  ngOnInit(): void {
    this.advertService.getAllAds().subscribe(
      (data:any)=> {
        if(data.status != 'Error'){
          /*
          * Filter list by country of user
          * */
          this.advert =  data.data[Math.floor(Math.random() * data.data.length)];
          if(this.advert.image == 'firebase_url'){
            this.getImageAdvert(this.advert.id).subscribe(
              (img) => {
                this.imageAdvert = img;
              }
            )
          }
          this.advertService.addImpressionByAdvertId(this.advert.id, {date : new Date().toISOString()}).subscribe(
            (data) => {
              console.log(data);
            }
          )
        }
      }
    )
  }

  accept(){
    alert(new Date().toISOString());
    this.advertService.addClickByAdvertId(this.advert.id, {date : new Date().toISOString()}).subscribe(
      (data) => {
        console.log(data);
      }
    )
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onClick(): void {
  }

  getImageAdvert(id){
    return this.storage.ref('upload/'+id).getDownloadURL();
  }

}
