import { Component, Input, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';

// Custom components
import { ShowTpKeywordsData } from './showtpkeywordsdata.model';
import { ShowtpkeywordsdataService } from './showtpkeywordsdata.service';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-show-tpkeywords',
  templateUrl: './show-tpkeywords.component.html',
  styleUrls: ['./show-tpkeywords.component.css']
})

export class ShowTPKeywordsComponent implements OnInit {

  showtpkeywordsdata$: ShowTpKeywordsData[];

  private gridApi;
  private gridColumnApi;
  private rowSelection;
  public notSelected: boolean = false;

  @ViewChild('agGrid', { static: false }) agGrid: AgGridAngular;
  @Input('editBtn') formEditBtn: boolean = true;
  @Input('formExisted') formExisted: boolean = true;
  @Output() public hideTpkeywords: any = new EventEmitter<any>();

  public deleteMsg: boolean = false;

  columnDefs = [
    { headerName: 'Therapy Type', field: 'TherapyType', rowGroup: true, hide: true, width: 225 },
    { headerName: 'Interventions', field: 'PresentActivity', rowGroup: true, hide: true, width: 225 },
    { headerName: 'Sub Components', field: 'SubComp', width: 225 },
    { headerName: 'Type', field: 'Type', width: 225 },
    { headerName: 'Number', field: 'Number', width: 225 },
    { headerName: 'Column-1', field: 'ColumnType_1', width: 225 }
  ];
  defaultColDef = { sortable: true };
  constructor(private showtpkeywordsdataService: ShowtpkeywordsdataService, private http: HttpClient) {
    this.rowSelection = "multiple";
  }

  ngOnInit() {
    return this.showtpkeywordsdataService.getShowtpkeywordsdata()
      .subscribe(data => this.showtpkeywordsdata$ = data);
  }

  public onCellDoubleClicked(event: any) {
    if ((event.colDef.field === 'SubComp' || event.colDef.field === 'Type' || event.colDef.field === 'Number' || event.colDef.field === 'ColumnType_1') && (event.data.SubComp != null && event.data.SubComp !== undefined)) {
      this.hideTpkeywords.emit({ flag: false, data: event.data });
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

  public onRemoveSelected() {
    var selectedData = this.gridApi.getSelectedRows();
    var res = this.gridApi.updateRowData({ remove: selectedData });
    var ID = res.remove[0].data.ID;
    this.http.delete<any>('http://localhost:3000/tpKeywordsDataController/deleteFormData/' + ID).subscribe(
      res => {
        console.log(res);
        this.deleteMsg = true;
        setTimeout(() => {
          $(".alert-danger").fadeTo(500, 0).slideUp(500, function () {
            $(this).remove();
          });
          this.deleteMsg = false;
          this.notSelected = false;
        }, 3000);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occurred.");
        } else {
          console.log("Server-side error occurred.");
        }
      });
  }
}





