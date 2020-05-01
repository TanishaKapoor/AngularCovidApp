import { TestBed, inject } from '@angular/core/testing';

import { DashboardService } from './dashboard.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { EmptyExpr } from '@angular/compiler';

const mockData={
  "districtData": {
    "Lohit": {
      "notes": "",
      "active": 0,
      "confirmed": 1,
      "deceased": 0,
      "recovered": 1,
      "delta": {
        "confirmed": 0,
        "deceased": 0,
        "recovered": 0
      }
    }
  },
  "statecode": "AR"
};
describe('DashboardService', () => {
  let service: DashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[DashboardService,HttpClient,HttpHandler]
    });
    service = TestBed.inject(DashboardService);
  });

  it('should be created', inject([DashboardService],(service:DashboardService)=>{
    expect(service).toBeTruthy();
  }));
  it('it should get not return anything if no district details exits',()=>{
      service.getDistrictByStateCode('TK');
      expect(service.stateDistrictDetails).not.toBeDefined();
  });
  it('it should return data if district info exists for state',()=>{
      service.stateDistrictDetails=[mockData];
      service.getDistrictByStateCode("AR");
      expect(service.stateDistrictDetails).not.toBeNull();
  });
});
