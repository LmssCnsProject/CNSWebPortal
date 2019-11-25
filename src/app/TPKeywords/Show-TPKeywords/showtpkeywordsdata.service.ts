import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShowTpKeywordsData } from './showtpkeywordsdata.model';

@Injectable({
  providedIn: 'root'
})
export class ShowtpkeywordsdataService {

  // Base url
  apiUrl = 'http://localhost:3000';

  constructor(private _http: HttpClient) { }

  getShowtpkeywordsdata() {
    return this._http.get<ShowTpKeywordsData[]>(this.apiUrl + '/tpKeywordsDataController/selectData');
  }
}
