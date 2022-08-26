import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AtoBRouteResponse, basicAtoBRoute } from '../interfaces/backend-interfaces';
import { catchError, Observable, of, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  }),

};

@Injectable()
export class BackendServicesService {

  constructor(private http: HttpClient) { }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
  
basicAtoBRoute(aToBRoute: basicAtoBRoute): Observable<AtoBRouteResponse> {
 {
    return this.http.post<AtoBRouteResponse>('https://router.hereapi.com/v8/routes', aToBRoute, httpOptions);
}
}
}