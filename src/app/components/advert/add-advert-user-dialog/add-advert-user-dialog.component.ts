import {Component, Inject, OnInit} from '@angular/core';
import {PlaylistService} from "../../../services/playlist.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Advert} from "../../../models/advert.module";
import {AdvertService} from "../../../services/advert.service";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AngularFireStorage} from "@angular/fire/storage";


@Component({
  selector: 'app-add-advert-user-dialog',
  templateUrl: './add-advert-user-dialog.component.html',
  styleUrls: ['./add-advert-user-dialog.component.scss']
})
export class AddAdvertUserDialogComponent implements OnInit {

  id;
  selectedFile = '';
  advert: Advert = new Advert();
  form: FormGroup;
  MoviesData: Array<any> = [
    { name: 'France', value: 'France' },
    { name: 'Usa', value: 'Usa' },
    { name: 'Canada', value: 'Canada' },
    { name: 'Morocco', value: 'Morocco' },
    { name: 'Italy', value: 'Italy' },
    { name: 'Spain', value: 'Spain' },
    { name: 'Morocco', value: 'Morocco' },
    { name: 'Italy', value: 'Italy' },
    { name: 'Spain', value: 'Spain' }
  ];

  constructor(
    private storage: AngularFireStorage,
    private fb: FormBuilder,
    private advertService: AdvertService,
    public dialogRef: MatDialogRef<AddAdvertUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.form = this.fb.group({
      isArray: this.fb.array([], [Validators.required])
    })
  }

  ngOnInit() {
    this.id = this.data.id;
    this.advert.cost =1;
    this.advert.daily_budget = 1;
    this.advert.period = 1;
    this.advert.coverage = 1;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onClick(): void {
    this.advertService.addAdsByUser(this.id, this.advert).subscribe(
      (data:any) => {
        if(data.status != 'Error'){
          console.log(data.data);
          if(this.selectedFile != ''){
            this.advertService.getAllAdsByUser(this.id).subscribe(
              (data2:any) => {
                if(data2.status != 'Error'){
                  let id = data2.data.adverts[data2.data.adverts.length-1]._id;
                  this.storage.ref('upload/'+id).put(this.selectedFile);
                }
              }
            );
          }
          this.dialogRef.close('ok');
        }
      }
    );
  }

  handleUpload(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.advert.image = file;
    }
  }

  changeCost() {
    this.advert.cost = this.advert.period * this.advert.daily_budget;
    this.advert.coverage = this.advert.daily_budget * 100 * this.advert.period;
  }
  onCbChange(e) {
    const isArray: FormArray = this.form.get('isArray') as FormArray;

    if (e.target.checked) {
      isArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      isArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          isArray.removeAt(i);
          return;
        }
        i++;
      });
    }
    this.advert.location = this.form.value.isArray.join(',');
  }

  onFileSelected(event){

    if(event.target.files.length > 0){
      this.selectedFile = event.target.files[0];
      this.advert.image = 'firebase_url'
    }else {
      this.selectedFile = '';
      this.advert.image = 'none'
    }

  }
}
