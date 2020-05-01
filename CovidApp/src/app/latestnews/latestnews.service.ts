import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { INews } from '../core/models';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class LatestNewsService {

  private newsApi = "api/newDetails"
  constructor(private http: HttpClient) { 
  }

  getNewsDetails():Observable<INews[]>{
    return this.http.get<INews[]>(this.newsApi);
  }
  addnews(addnews:INews):Observable<INews>{
    return this.http.post<INews>(this.newsApi, addnews, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  
private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    console.error('An error occurred:', error.error.message);
  } else {
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  return throwError(
    'Something bad happened; please try again later.');
};
}
