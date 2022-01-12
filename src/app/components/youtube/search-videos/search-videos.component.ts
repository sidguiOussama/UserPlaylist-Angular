import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SharedDataService} from '../../../services/shared-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-videos',
  templateUrl: './search-videos.component.html',
  styleUrls: ['./search-videos.component.scss']
})
export class SearchVideosComponent implements OnInit {


  constructor(private http: HttpClient, private sharedDataService: SharedDataService, private router: Router) { }
  data: any = [];
  dataYoutube: any = [];

  search = '';
  ngOnInit(): void {
    this.http.get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=nodejs&key=AIzaSyCoZn_Yj_RWX7nTSwGyUf2-44gu59k4A2o&maxResults=10').subscribe(
      (data) => {
        this.dataYoutube = data;
        console.log(this.dataYoutube);
      }
    );
    this.http.get('https://api.dailymotion.com/videos?fields=id,title,thumbnail_720_url,description,embed_url,owner&search=nodejs&limit=10').subscribe(
      (data) => {
        this.data = data;
      }
    );
  }

  clickTest(item: any, host: any) {
    console.log(item);
    this.sharedDataService.nextMessage({item : item , host: host});
    this.router.navigateByUrl('/videoDetails');
  }

  searchFunction() {
    this.http.get('https://api.dailymotion.com/videos?fields=id,title,thumbnail_720_url,description,embed_url,owner&search=' + this.search + '&limit=10').subscribe(
      (data) => {
        this.data = data;
      }
    );
    this.http.get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&q='+this.search+'&key=AIzaSyCoZn_Yj_RWX7nTSwGyUf2-44gu59k4A2o&maxResults=10').subscribe(
      (data) => {
        this.dataYoutube = data;
      }
    );
  }
}
