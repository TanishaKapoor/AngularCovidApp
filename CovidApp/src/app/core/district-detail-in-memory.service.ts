import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStateDetails, IDistrictDetails } from './models';
import { map } from 'rxjs/operators';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { districtdetailDbValue } from './districtdb';

@Injectable({
  providedIn: 'root'
})
export class DistrictDetailInMemory implements InMemoryDbService {

  createDb(){
    const districtDetails : IDistrictDetails[]= districtdetailDbValue;
    return {districtDetails};
  }
}
