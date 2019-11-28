import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-acis',
  templateUrl: './add-acis.component.html',
  styleUrls: ['./add-acis.component.css']
})
export class AddAcisComponent implements OnInit {

  Hours: Array<string> = [
    '7AM-8AM',
    '8AM-9AM',
    '9AM-10AM',
    '10AM-11AM',
    '11AM-12PM',
    '1PM-2PM',
    '2PM-3PM',
    '3PM-4PM',
    '4PM-5PM',
    '5PM-6PM',
    '6PM-7PM'
  ];

  ACIS_Patientinfo: Array<string> = [
    'Contact Number',
    'Age',
    'Education'
  ];

  TherapyType: Array<string> = [
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

  Therapist: Array<string> = [
    'Joe',
    'John',
    'Harry'
  ];

  PerformanceValues_1: Array<string> = [
    '1',
    '2',
    '3'
  ];

  PerformanceValues_2: Array<string> = [
    '1',
    '2',
    '3'
  ];

  PerformanceValues_3: Array<string> = [
    '1',
    '2',
    '3'
  ];

  PerformanceValues_4: Array<string> = [
    '1',
    '2',
    '3'
  ];

  PerformanceValues_5: Array<string> = [
    '1',
    '2',
    '3'
  ];

  public addAcisForm: FormGroup;
  public hideBtn: boolean = false;
  public formAcisUpdateBtn: boolean = false;

  @Output() public hideAcisTable: any = new EventEmitter<any>();
  @Input('formBtn') newAcisFormBtn: boolean;
  @Input('editBtn') formAcisEditBtn: boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.addAcisForm = this.fb.group({
      Hours: [null, Validators.required],
      TherapyType: [null, Validators.required],
      Therapist: [null, Validators.required],
      ACIS_Patientinfo: [null, Validators.required],
      PerformanceValues_1: [null, Validators.required],
      PerformanceValues_2: [null, Validators.required],
      PerformanceValues_3: [null, Validators.required],
      PerformanceValues_4: [null, Validators.required],
      PerformanceValues_5: [null, Validators.required]
    })
  }

  // Close add tpkeywords form functionality start here
  public closeAcisForm() {
    this.addAcisForm.reset();
    this.hideAcisTable.emit({ flag: true, data: null });
  }

  onAcisEditForm(e) {
    this.formAcisUpdateBtn = true;
    this.hideBtn = true;
  }

  onSubmit() {
    this.addAcisForm.controls['Hours'].markAsTouched();
    this.addAcisForm.controls['TherapyType'].markAsTouched();
    this.addAcisForm.controls['Therapist'].markAsTouched();
    this.addAcisForm.controls['ACIS_Patientinfo'].markAsTouched();
    this.addAcisForm.controls['PerformanceValues_1'].markAsTouched();
    this.addAcisForm.controls['PerformanceValues_2'].markAsTouched();
    this.addAcisForm.controls['PerformanceValues_3'].markAsTouched();
    this.addAcisForm.controls['PerformanceValues_4'].markAsTouched();
    this.addAcisForm.controls['PerformanceValues_5'].markAsTouched();
  };

}
