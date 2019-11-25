import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-acis',
  templateUrl: './acis.component.html',
  styleUrls: ['./acis.component.css']
})
export class ACISComponent implements OnInit {

  public ShowAcisTable = true;
  public newAcisFormBtn: boolean;
  public formAcisEditBtn: boolean;

  constructor() {
    this.newAcisFormBtn = true;
    this.formAcisEditBtn = true;
  }

  public hideAcisTable(event) {
    this.ShowAcisTable = event.flag;
    if (event.data) {
      this.formAcisEditBtn = true;
      this.newAcisFormBtn = false;
    }
  }
  public getAcisForm() {
    this.ShowAcisTable = false;
    this.newAcisFormBtn = true;
    this.formAcisEditBtn = false;

  }
  ngOnInit() {

  }

}
