import {NgModule} from '@angular/core';


@NgModule()
export  class Advert {
  title: string;
  description: string;
  location: string;
  cost:  number;
  clicks: [
    { date: Date}
  ];
  impression: string;
  period: number;
  link: string;
  _id: string;
  id: string;
  image : string;
  audience: string;
  daily_budget: number;
  coverage:number;
  constructor(){}
}
