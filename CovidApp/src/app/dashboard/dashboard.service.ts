import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError} from 'rxjs';
import { catchError  } from 'rxjs/operators';
import { IStateDetails, IDistrictDetails } from '../core/models';
import { error } from '@angular/compiler/src/util';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

   private statedetailApi  = "api/stateDetail";
   private districtApi = "api/districtDetails"
   stateDistrictDetails:IDistrictDetails[];

    constructor(private http: HttpClient) {
      this.getStateDistricts().subscribe((districts)=>{
        this.stateDistrictDetails = districts;
      }, (error)=>{
        console.log('error occured');
      })
     }

    /** GET ALL user detail. */
    getStateDetails(): Observable<IStateDetails[]> {
      return this.http.get<IStateDetails[]>(this.statedetailApi);
    }
    getStateDistricts(): Observable<IDistrictDetails[]>{
      return this.http.get<IDistrictDetails[]>(this.districtApi);
    }
    getDistrictByStateCode(statecode:string){
      return this.stateDistrictDetails?.find(c=>c.statecode==statecode);
    }
   
}
