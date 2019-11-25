import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import 'ag-grid-enterprise';

import { ShowAcisData } from './show-acisdata.model';
import { ShowAcisDataService } from './showacisdata.service';



@Component({
  selector: 'app-show-acis',
  templateUrl: './show-acis.component.html',
  styleUrls: ['./show-acis.component.css']
})
export class ShowAcisComponent implements OnInit {

  acistabledata$: ShowAcisData[];

  private gridApi;
  private gridColumnApi;
  private rowSelection;

  public notSelected: boolean = false;

  @ViewChild('agGrid', { static: false }) agGrid: AgGridAngular;
  @Output() public hideAcisTable: any = new EventEmitter<any>();


  columnDefs = [
    { headerName: 'Patient', field: 'Patient', rowGroup: true, hide: true, width: 225 },
    { headerName: 'Therapy Type', field: 'TherapyType', rowGroup: true, hide: true, width: 225 },
    { headerName: 'Date', field: 'Date', width: 225 },
    { headerName: 'Time', field: 'Time', width: 225 },
    { headerName: 'NoShow', field: 'NoShow', width: 225 },
    { headerName: 'Impairment', field: 'Impairment', width: 225 }
  ];

  defaultColDef = { sortable: true };

  constructor(private showacisdataService: ShowAcisDataService, private http: HttpClient) {
    this.rowSelection = "multiple";
  }

  ngOnInit() {
    return this.showacisdataService.getShowacisdata()
    .subscribe(data => this.acistabledata$ = data);
  }
  public onCellDoubleClicked(event: any) {
    if ((event.colDef.field === 'Date' || event.colDef.field === 'Time' || event.colDef.field === 'NoShow' || event.colDef.field === 'Impairment')) {
      this.hideAcisTable.emit({ flag: false, data: event.data });
    }
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  getSelectedRows() {
    const selectedRow = this.gridApi.getSelectedRows();
    console.log(selectedRow);
  }

  onRowSelected(event) {
    setTimeout(() => {
      this.notSelected = true;
    }, 250);
  }
}
