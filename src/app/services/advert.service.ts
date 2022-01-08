import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../models/user.module';
import {Advert} from "../models/advert.module";


@Injectable({
  providedIn: 'root'
})
export class AdvertService {

  url = environment.advertUrl;

  constructor(private http: HttpClient) { }

  getAllAds() {
    return this.http.get(this.url);
  }
  getAllAdsByUser(id: string) {
    return this.http.get(this.url+'/user/'+id);
  }

  addAdsByUser(id: string, advert:Advert){
    return this.http.post(this.url+'/advert/'+id , advert);
  }

  deleteAdsByUser(id: string){
    return this.http.delete(this.url+'/advert/'+id);
  }

  getAdvert(id: string){
    return this.http.get(this.url+'/advert/'+id);
  }

  addClickByAdvertId(id: String , date: any){
    return this.http.post(this.url+'click/'+id , date);
  }

}
