import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStateDetails, IDistrictDetails, INews } from './models';
import { map } from 'rxjs/operators';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { statedetailDbValue } from './statedb';
import { districtdetailDbValue } from './districtdb';
import { newsDetailsDb } from './newdetailsDb';

@Injectable({
  providedIn: 'root'
})
export class StateDetailInMemoryService implements InMemoryDbService {

  createDb(){
    const stateDetail : IStateDetails[]= statedetailDbValue;
    const districtDetails : IDistrictDetails[]= districtdetailDbValue;
    const newDetails: INews[] = newsDetailsDb;
    return {stateDetail,districtDetails,newDetails};
  }
  genId(newDetails: INews[]): number {
    return newDetails.length > 0 ? Math.max(...newDetails.map(user => (user.id))) + 1 : 1;
  }
}
