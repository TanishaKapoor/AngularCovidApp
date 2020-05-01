import { Component, OnInit } from '@angular/core';
import { IStateDetails } from 'src/app/core/models';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-statedetails',
  templateUrl: './statedetails.component.html',
  styleUrls: ['./statedetails.component.scss']
})
export class StatedetailsComponent implements OnInit {

 
  stateValues: IStateDetails[]=[];
  constructor(private dashboardService: DashboardService) { };

  ngOnInit(): void {
    this.dashboardService.getStateDetails().subscribe(data => {
      this.stateValues = data;
    });
  }
}
