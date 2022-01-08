import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../models/user.module';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.authUrl;

  constructor(private http: HttpClient) { }


  signin(login: string, password: string){
    return this.http.post<any>(this.url + 'signIn', {login, password});
  }


  signup(user: User){
    return this.http.post<any>(this.url + 'signUp', user);
  }


}
