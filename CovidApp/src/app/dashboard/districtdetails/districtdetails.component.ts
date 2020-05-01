import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDistrictDetails, DictionaryType } from 'src/app/core/models';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-districtdetails',
  templateUrl: './districtdetails.component.html',
  styleUrls: ['./districtdetails.component.scss']
})
export class DistrictdetailsComponent implements OnInit {

  currentStateCode:string;
  districtsBlock: IDistrictDetails;
  districtData : DictionaryType;
  constructor(private activatedRoute: ActivatedRoute, private router: Router,
              private  dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.currentStateCode= this.activatedRoute.snapshot.params.stateCode;
    console.log("currentStateCode",this.currentStateCode);
    if(this.currentStateCode) {
      this.districtsBlock = this.dashboardService.getDistrictByStateCode(this.currentStateCode);
      this.districtData= this.districtsBlock?.districtData;
    }
  }
  goBack(){
    this.router.navigate(['/dashboard/state'])
  }

}
