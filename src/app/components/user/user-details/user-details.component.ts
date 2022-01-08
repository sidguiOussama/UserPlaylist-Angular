import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/user.module";
import {UserService} from "../../../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {AdvertService} from "../../../services/advert.service";
import {Advert} from "../../../models/advert.module";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  id;
  user = new User();
  adverts : Advert[] = [];
  constructor(private userService: UserService, private route: ActivatedRoute , private advertService: AdvertService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.userService.getUser(this.id).subscribe(
      (data:any) => {
        if(data.status != "Error") {
          this.user = data.data;
          if(this.user.role=="advert"){
            this.advertService.getAllAdsByUser(this.user.id).subscribe(
              (data2: any)=> {
                if(data2.status != "Error"){
                  console.log(data2);
                  this.adverts = data2.data.adverts;
                }
              }
            );
          }

        }
        console.log(data);
      }
    )
  }

}
