import {NgModule} from '@angular/core';


@NgModule()
export  class Advert {
  title: string;
  description: string;
  location: string;
  cost:  number;
  clicks: number;
  impression: string;
  period: number;
  link: string;
  _id: string;
  image : string;
  constructor(){}
}
