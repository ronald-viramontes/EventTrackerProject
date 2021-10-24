import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyMedicalHistoryComponent } from './components/family-medical-history/family-medical-history.component';
import { HomeComponent } from './components/home/home.component';
import { MedicalHistoryComponent } from './components/medical-history/medical-history.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PatientComponent } from './components/patient/patient.component';
import { VitalSignsComponent } from './components/vital-signs/vital-signs.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'patients', component: PatientComponent },
  { path: 'patients/:id', component: PatientComponent },
  { path: 'patients/:pid/vitalsigns', component: VitalSignsComponent },
  { path: 'patients/:pid/medicalhistory', component: MedicalHistoryComponent },
  {
    path: 'patients/:pid/familymedicalhistory',
    component: FamilyMedicalHistoryComponent,
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
