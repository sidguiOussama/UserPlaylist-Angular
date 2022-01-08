import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {User} from "../../../models/user.module";

@Component({
  selector: 'app-profil-setting',
  templateUrl: './profil-setting.component.html',
  styleUrls: ['./profil-setting.component.scss']
})
export class ProfilSettingComponent implements OnInit {

  DisableInput = true;
  id;
  user = new User();
  editedUser = new User();
  constructor(private userService: UserService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.userService.getUser(this.id).subscribe(
      (data:any) => {
        if(data.status != "Error") {
          this.user = data.data;
          this.editedUser = {... this.user};
        }
        console.log(data);
      }
    )
  }

  upadteProfil() {
    this.DisableInput = false;
  }

  saveUpdate(){
    //console.log(this.editedUser);
    this.userService.updateUser(this.id,this.editedUser).subscribe(
      (data:any) => {
        if(data.status != "Error") {
          this.user = data.data;
          this.editedUser = {... this.user};
          this.DisableInput = true;
        }
      }
    )
  }

  cancelUpdate(){
    this.DisableInput = true;
    this.editedUser = this.user;
  }
}
