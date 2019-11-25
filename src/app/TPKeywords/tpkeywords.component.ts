import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tpkeywords',
  templateUrl: './tpkeywords.component.html',
  styleUrls: ['./tpkeywords.component.css']
})
export class TPKeywordsComponent implements OnInit {
 
  public formInputData: any;
  public newForm: boolean;
  public newFormBtn: boolean;
  public formEditBtn: boolean;
  public formExisted: boolean;
  public deleteMsg: boolean;

  public ShowtpkeywordsTable = true;
  public deleteDoc: boolean = false;

  constructor() {
    this.newForm = true;
    this.newFormBtn = true;
    this.formEditBtn = true;
    this.formExisted = true;
    this.deleteMsg = false;

   }
   public getForm() {
    this.ShowtpkeywordsTable = false;
    this.newForm = true;
    this.newFormBtn = true;
    this.formEditBtn = false;
    this.formExisted = false;

  }

  public hideTpkeywords(event) {
    console.log(event.data);
    this.ShowtpkeywordsTable = event.flag;
    if (event.data && event.data.SubComp) {
      this.formInputData = event.data;
      this.newForm = false;
      this.newFormBtn = false;
      this.formEditBtn = true;
      this.formExisted = true;

    } else {
      this.formInputData = {};
    }
  }
  ngOnInit() {
  }

}
