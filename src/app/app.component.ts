import { Component, Output, EventEmitter } from '@angular/core';
import { HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Back to top functionality start here
  isShow: boolean;
  topPosToStartShowing = 100;
  // public formInputData: any;
  // public newForm: boolean;
  // public newFormBtn: boolean;
  // public formEditBtn: boolean;
  // public formExisted: boolean;
  // public deleteMsg: boolean;

  // @Output() public onRemoveSelected = new EventEmitter<any>();


  // public data: any;
  // Show tp keywords and add new tp keywords form hide and show start here

  // public ShowtpkeywordsTable = true;
  // public deleteDoc: boolean = false;

  constructor() {
    // this.newForm = true;
    // this.newFormBtn = true;
    // this.formEditBtn = true;
    // this.formExisted = true;
    // this.deleteMsg = false;
  }

  // public getForm() {
  //   this.ShowtpkeywordsTable = false;
  //   this.newForm = true;
  //   this.newFormBtn = true;
  //   this.formEditBtn = false;
  //   this.formExisted = false;

  // }

  // public hideTpkeywords(event) {
  //   console.log(event.data);
  //   this.ShowtpkeywordsTable = event.flag;
  //   if (event.data && event.data.SubComp) {
  //     this.formInputData = event.data;
  //     this.newForm = false;
  //     this.newFormBtn = false;
  //     this.formEditBtn = true;
  //     this.formExisted = true;

  //   } else {
  //     this.formInputData = {};
  //   }
  // }

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  // Back to top functionality end here
}
