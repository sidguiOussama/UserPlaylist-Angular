import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environment.userUrl;

  constructor(private http: HttpClient) { }


}
