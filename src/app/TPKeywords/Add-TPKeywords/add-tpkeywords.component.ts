import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

// Custom imports
import { AddtpkeywordsdataService } from './addtpkeywordsdata.service';
import { empty } from 'rxjs';
import * as $ from 'jquery';

@Component({
  selector: 'app-add-tpkeywords',
  templateUrl: './add-tpkeywords.component.html',
  styleUrls: ['./add-tpkeywords.component.css']
})
export class AddTPKeywordsComponent implements OnInit {

  therapytypes: Array<string> = [
    'Case Management',
    'Complementary Integrative',
    'Counseling',
    'Education',
    'Health Fitness',
    'Nursing',
    'Occupational Therapy',
    'Physical Therapy',
    'Residential',
    'Speech Therapy'
  ];

  tableYesDatatype: Array<string> = [
    'Degrees',
    'Feet',
    'Feet and Inches',
    'Inches',
    'Kilometer and Meter',
    'Minutes',
    'Minutes and Seconds',
    'Number',
    'Percentage',
    'Pounds',
    'Seconds'
  ]

  public addTpKeyWordsForm: FormGroup;
  private selectedType: string;

  @Output() public hideTpkeywords: any = new EventEmitter<any>();
  @Input('formData') formData: any;
  @Input('newForm') newForm: boolean;
  @Input('formBtn') newFormBtn: boolean;
  @Input('editBtn') formEditBtn: boolean;
  @Input('formExisted') formExisted: boolean;

  public successMsg: boolean = false;
  public updateMsg: boolean = false;
  public formUpdateBtn: boolean = false;
  public hideBtn: boolean = false;
  public radiodisabled: boolean = false;
  public isExists: boolean = false;
  // public isExists = "";
  public res: any = {};

  setradio(e: string): void {
    this.selectedType = e;
  }

  isSelected(name: string): boolean {
    if (!this.selectedType) {
      return false;
    }
    return (this.selectedType === name);
  }

  constructor(private _fb: FormBuilder, private _addtpkeywordsdataService: AddtpkeywordsdataService, private http: HttpClient) {
  }

  ngOnInit() {
    this.addTpKeyWordsForm = this._fb.group({
      ID: [''],
      TherapyType: [null, Validators.required],
      PresentActivity: ['', Validators.required],
      SubComp: [''],
      Type: [null, Validators.required],
      Normal: [''],
      Number: [''],
      Description: [''],
      Procedure: [''],
      Title_1: [''],
      Title_2: [''],
      Title_3: [''],
      Title_4: [''],
      Title_5: [''],
      Title_6: [''],
      Title_7: [''],
      Title_8: [''],
      Title_9: [''],
      Title_10: [''],
      Title_11: [''],
      Title_12: [''],
      Title_13: [''],
      Title_14: [''],
      Title_15: [''],
      Title_16: [''],
      Title_17: [''],
      Title_18: [''],
      Title_19: [''],
      Title_20: [''],
      ColumnType_1: [''],
      ColumnType_2: [''],
      ColumnType_3: [''],
      ColumnType_4: [''],
      ColumnType_5: [''],
      ColumnType_6: [''],
      ColumnType_7: [''],
      ColumnType_8: [''],
      ColumnType_9: ['']
    });

    if (this.formData && Object.keys(this.formData).length > 0) {
      this.formData = this.clean(this.formData);
      this.addTpKeyWordsForm.controls['ID'].setValue(this.formData.ID || null);
      this.addTpKeyWordsForm.controls['TherapyType'].setValue(this.formData.TherapyType || null);
      this.addTpKeyWordsForm.controls['PresentActivity'].setValue(this.formData.PresentActivity || null);
      this.addTpKeyWordsForm.controls['SubComp'].setValue(this.formData.SubComp || null);
      this.addTpKeyWordsForm.controls['Type'].setValue(this.formData.Type || null);
      this.addTpKeyWordsForm.controls['Normal'].setValue(this.formData.Normal || null);
      this.addTpKeyWordsForm.controls['Number'].setValue(this.formData.Number || null);
      this.addTpKeyWordsForm.controls['Description'].setValue(this.formData.Description || null);
      this.addTpKeyWordsForm.controls['Procedure'].setValue(this.formData.Procedure || null);

      this.addTpKeyWordsForm.controls['Title_1'].setValue(this.formData.Title_1 || null);
      this.addTpKeyWordsForm.controls['Title_2'].setValue(this.formData.Title_2 || null);
      this.addTpKeyWordsForm.controls['Title_3'].setValue(this.formData.Title_3 || null);
      this.addTpKeyWordsForm.controls['Title_4'].setValue(this.formData.Title_4 || null);
      this.addTpKeyWordsForm.controls['Title_5'].setValue(this.formData.Title_5 || null);
      this.addTpKeyWordsForm.controls['Title_6'].setValue(this.formData.Title_6 || null);
      this.addTpKeyWordsForm.controls['Title_7'].setValue(this.formData.Title_7 || null);
      this.addTpKeyWordsForm.controls['Title_8'].setValue(this.formData.Title_8 || null);
      this.addTpKeyWordsForm.controls['Title_9'].setValue(this.formData.Title_9 || null);
      this.addTpKeyWordsForm.controls['Title_10'].setValue(this.formData.Title_10 || null);
      this.addTpKeyWordsForm.controls['Title_11'].setValue(this.formData.Title_11 || null);
      this.addTpKeyWordsForm.controls['Title_12'].setValue(this.formData.Title_12 || null);
      this.addTpKeyWordsForm.controls['Title_13'].setValue(this.formData.Title_13 || null);
      this.addTpKeyWordsForm.controls['Title_14'].setValue(this.formData.Title_14 || null);
      this.addTpKeyWordsForm.controls['Title_15'].setValue(this.formData.Title_15 || null);
      this.addTpKeyWordsForm.controls['Title_16'].setValue(this.formData.Title_16 || null);
      this.addTpKeyWordsForm.controls['Title_17'].setValue(this.formData.Title_17 || null);
      this.addTpKeyWordsForm.controls['Title_18'].setValue(this.formData.Title_18 || null);
      this.addTpKeyWordsForm.controls['Title_19'].setValue(this.formData.Title_19 || null);
      this.addTpKeyWordsForm.controls['Title_20'].setValue(this.formData.Title_20 || null);

      this.addTpKeyWordsForm.controls['ColumnType_1'].setValue(this.formData.ColumnType_1 || null);
      this.addTpKeyWordsForm.controls['ColumnType_2'].setValue(this.formData.ColumnType_2 || null);
      this.addTpKeyWordsForm.controls['ColumnType_3'].setValue(this.formData.ColumnType_3 || null);
      this.addTpKeyWordsForm.controls['ColumnType_4'].setValue(this.formData.ColumnType_4 || null);
      this.addTpKeyWordsForm.controls['ColumnType_5'].setValue(this.formData.ColumnType_5 || null);
      this.addTpKeyWordsForm.controls['ColumnType_6'].setValue(this.formData.ColumnType_6 || null);
      this.addTpKeyWordsForm.controls['ColumnType_7'].setValue(this.formData.ColumnType_7 || null);
      this.addTpKeyWordsForm.controls['ColumnType_8'].setValue(this.formData.ColumnType_8 || null);
      this.addTpKeyWordsForm.controls['ColumnType_9'].setValue(this.formData.ColumnType_9 || null);

      if (this.addTpKeyWordsForm.controls['Type'].value === true) {
        this.setradio('GridTypeYes');
      } else {
        this.setradio('GridTypeNo');
      }
    }
  }
  //  Therapy Type Type and impairment dropdown selection code end

  // Close add tpkeywords form functionality start here
  public closeNewForm() {
    this.addTpKeyWordsForm.reset();
    this.hideTpkeywords.emit({ flag: true, data: null });
  }

  // Submit form data
  onSubmit() {
    if (this.addTpKeyWordsForm.controls['Type'].value == null) {
      this.addTpKeyWordsForm.controls['Type'].setValue("0");
    }
    this.addTpKeyWordsForm.controls['TherapyType'].markAsTouched();
    this.addTpKeyWordsForm.controls['PresentActivity'].markAsTouched();
    this.addTpKeyWordsForm.controls['Type'].markAsTouched();
    var newKeywordformData = this.clean(this.addTpKeyWordsForm.value);

    if (this.addTpKeyWordsForm.valid) {
      let req = {
        body: newKeywordformData
      }
      if (this.formEditBtn  == !this.isExists) {
        this._addtpkeywordsdataService.Updatetpkeywords(newKeywordformData).subscribe(responseData => {
          console.log(responseData);
          this.updateMsg = true;
          setTimeout(() => {
            $(".alert-secondary").fadeTo(500, 0).slideUp(500, function () {
              $(this).remove();
            });
            this.hideTpkeywords.emit({ flag: true, data: null });
          }, 3000);
        });
      } else {
        this._addtpkeywordsdataService.Createtpkeywords(newKeywordformData).subscribe(responseData => {
          console.log(responseData);
          this.successMsg = true;
          setTimeout(() => {
            $(".alert-success").fadeTo(500, 0).slideUp(500, function () {
              $(this).remove();
            });
            this.hideTpkeywords.emit({ flag: true, data: null });
          }, 3000);
        });
      }
    }
  }

  // For Object undefind values and null values filter
  clean(obj: any) {
    for (var propName in obj) {
      if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "undefined") {
        obj[propName] = '';
      }
    }
    return obj;
  }

  onEditForm(e) {
    this.formUpdateBtn = true;
    this.newForm = true;
    this.hideBtn = true;
    this.radiodisabled = true;
  }

  //Sub components duplication data
 checkDuplicated() {
  // debugger
  let therapy = this.addTpKeyWordsForm.get('TherapyType').value;
  let intervention = this.addTpKeyWordsForm.get('PresentActivity').value;
  let subComponent = this.addTpKeyWordsForm.get('SubComp').value ? this.addTpKeyWordsForm.get('SubComp').value : '';


  this._addtpkeywordsdataService.checkDuplicates(therapy, intervention, subComponent).subscribe(responseData => {
    console.log(responseData);
    // debugger
    this.res = responseData;
    this.isExists = this.res.isExist;
    // if ( this.res.length > 0) {
    //   this.isExists = "Alredy Exist";
    // }
    // else{
    //   this.isExists = "";
    // }
  });

}
}

