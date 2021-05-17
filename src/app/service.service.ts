import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getProducts(str: string): Observable<any> {
    const header = new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*')
    var temp = this.http.get<any>('http://c6e8fd757541.ngrok.io/', { headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*') }).pipe(
      catchError(this.handleError)
    );

    return temp
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
