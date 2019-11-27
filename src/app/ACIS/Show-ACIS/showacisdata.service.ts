import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShowAcisData } from './show-acisdata.model';

@Injectable({
  providedIn: 'root'
})
export class ShowAcisDataService {

  // Base url
  apiUrl = 'http://localhost:3000';

  constructor(private _http: HttpClient) { }

  getShowacisdata() {
    return this._http.get<ShowAcisData[]>(this.apiUrl + '/acisDataController/selectAcisData');
  }
}
