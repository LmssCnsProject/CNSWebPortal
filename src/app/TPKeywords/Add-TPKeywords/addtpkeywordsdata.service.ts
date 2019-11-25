import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

// Custom imports
import { addTpKeywordsPostData } from './addtpkeywordsdata.model';

@Injectable({
  providedIn: 'root'
})
export class AddtpkeywordsdataService {
  //Base url
  apiUrl = 'http://localhost:3000';

  constructor(private httpclient: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // POST data
  Createtpkeywords(data): Observable<addTpKeywordsPostData> {
    return this.httpclient.post<addTpKeywordsPostData>(this.apiUrl + '/tpKeywordsDataController/insertFormData', data, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  // Update data
  Updatetpkeywords(data): Observable<addTpKeywordsPostData> {
    return this.httpclient.put<addTpKeywordsPostData>(this.apiUrl + '/tpKeywordsDataController/updateFormData', data, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

// Check SubCom data
checkDuplicates(therapy,intervention,subComponent): Observable<addTpKeywordsPostData> {
  return this.httpclient.post<addTpKeywordsPostData>(this.apiUrl + '/tpKeywordsDataController/checkSubcomponentsdata', {"therapy":therapy,"intervention":intervention,"subComponent":subComponent}, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
}

  // Error handling
  errorHandl(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}



