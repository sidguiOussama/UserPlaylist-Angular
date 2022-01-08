import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/user.module";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  users:User[];
  filterUser:User[];
  selectedOption:String = 'all';
  choices = [
    {id: 0 ,name:"all" , label: "All"},
    {id: 1 ,name:"user", label: "Users"},
    {id: 2 ,name:"advert",label: "Adverts"},
    {id: 3 ,name:"admin", label: "Admins"},
  ]
  filterName: string = '';

  constructor(private userService:UserService) {

  }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe(
      (data:any) => {
        if(data.staus != "Error"){
          this.users = data.data;
          this.filterUser = data.data;
          console.log(this.filterUser);
        }
      }
    )
  }

  onChange() {
    if(this.selectedOption != 'all'){
      this.filterUser  = this.users.filter(user => user.role == this.selectedOption);
    }
    else {
      this.filterUser  = this.users;
    }

  }

  filterByName() {
    this.selectedOption = 'all';
    this.filterUser  = this.users.filter(user => (user.firstname.includes(this.filterName)) ||
                                                 (user.lastname.includes(this.filterName)) ||
                                                 (user.contact.email.includes(this.filterName))
                                        );
  }
}
