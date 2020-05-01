import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { DistrictdetailsComponent } from './districtdetails/districtdetails.component';
import { StatedetailsComponent } from './statedetails/statedetails.component';

export const dashboardRoutes: Routes = [
  {path:'state',component:StatedetailsComponent},
  {path: 'viewState/:stateCode', component: DistrictdetailsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DashboradRoutingModule { }
