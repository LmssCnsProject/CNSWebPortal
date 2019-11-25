import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { ACISComponent } from './ACIS/acis.component';
import { TreatmentPlanComponent } from './Treatment-Plan/treatment-plan.component';
import { ShowTMPlanComponent } from './Treatment-Plan/Show-TMPlan/show-tmplan.component';
import { AddTMPlanComponent } from './Treatment-Plan/Add-TMPlan/add-tmplan.component';
import { EditTMPlanComponent } from './Treatment-Plan/Edit-TMPlan/edit-tmplan.component';
import { AddAcisComponent } from './ACIS/Add-ACIS/add-acis.component';
import { ShowAcisComponent } from './ACIS/Show-ACIS/show-acis.component';
import { EditAcisComponent } from './ACIS/Edit-ACIS/edit-acis.component';
import { AddTPKeywordsComponent } from './TPKeywords/Add-TPKeywords/add-tpkeywords.component';
import { EditTPKeywordsComponent } from './TPKeywords/Edit-TPKeywords/edit-tpkeywords.component';
import { ShowTPKeywordsComponent } from './TPKeywords/Show-TPKeywords/show-tpkeywords.component';
import { TPKeywordsComponent } from './TPKeywords/tpkeywords.component';


import { from } from 'rxjs';

import { AgGridModule } from 'ag-grid-angular';
import { ShowtpkeywordsdataService } from './TPKeywords/Show-TPKeywords/showtpkeywordsdata.service';
import { AddtpkeywordsdataService } from './TPKeywords/Add-TPKeywords/addtpkeywordsdata.service';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  { path: '', component: ShowTPKeywordsComponent },
  { path: 'Acis', component: AddAcisComponent  }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ACISComponent,
    TreatmentPlanComponent,
    ShowTMPlanComponent,
    AddTMPlanComponent,
    EditTMPlanComponent,
    AddAcisComponent,
    ShowAcisComponent,
    EditAcisComponent,
    AddTPKeywordsComponent,
    EditTPKeywordsComponent,
    ShowTPKeywordsComponent,
    FooterComponent,
    TPKeywordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [ShowtpkeywordsdataService, AddtpkeywordsdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
