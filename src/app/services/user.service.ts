import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from "../models/user.module";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environment.userUrl;

  constructor(private http: HttpClient) { }


  getUser(id: string){
    return this.http.get(this.url+'getUser/'+id);
  }
  updateUser(id: string,user:User){
    return this.http.put(this.url+'updateUser/'+id,user);
  }
  getAllUser(){
    return this.http.get(this.url);
  }

}
