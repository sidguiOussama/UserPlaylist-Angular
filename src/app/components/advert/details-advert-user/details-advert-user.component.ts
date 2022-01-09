import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AdvertService} from "../../../services/advert.service";
import {Advert} from "../../../models/advert.module";
import { ChartDataSets, ChartOptions , ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-details-advert-user',
  templateUrl: './details-advert-user.component.html',
  styleUrls: ['./details-advert-user.component.scss']
})
export class DetailsAdvertUserComponent implements OnInit {

  id;
  advert:Advert | undefined;
  constructor(private route: ActivatedRoute,private advertService: AdvertService) { }

  public lineChartData: ChartDataSets[] = [
    { data: [0, 0, 0, 0, 0, 0, 0,0,0,0,0,0], label: 'Clicks' },
  ];
  public lineChartDataImpression: ChartDataSets[] = [
    { data: [0, 0, 0, 0, 0, 0, 0,0,0,0,0,0], label: 'Impressions' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September','October','November','December'];
  public lineChartOptions: (ChartOptions & { annotation ?: any }) = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'blue',
    },
  ];
  public lineChartColorsImpressions: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'red',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = "line" as ChartType;
  public lineChartPlugins = [];

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.advertService.getAdvert(this.id).subscribe(
      (data:any)=> {
        if(data.status != 'Error'){
          this.advert = data.data;
          this.advert.clicks.map((click)=> {
            let date = new Date(click.date);
            let stringValue = this.lineChartData[0].data[date.getMonth()]+'';
            this.lineChartData[0].data[date.getMonth()] =  Number(stringValue)+1;
          })
          this.advert.impressions.map((impression)=> {
            let date = new Date(impression.date);
            let stringValue = this.lineChartDataImpression[0].data[date.getMonth()]+'';
            this.lineChartDataImpression[0].data[date.getMonth()] =  Number(stringValue)+1;
          })
        }
      }
    )
  }


}
