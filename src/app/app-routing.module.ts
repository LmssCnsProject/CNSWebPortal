import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TPKeywordsComponent } from './TPKeywords/tpkeywords.component';
import { ACISComponent } from './ACIS/acis.component';



const routes: Routes = [
  { path: '', component: TPKeywordsComponent },
  { path: 'TPKeywords', component: TPKeywordsComponent },
  { path: 'ACIS', component: ACISComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
