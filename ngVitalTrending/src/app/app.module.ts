import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PatientComponent } from './components/patient/patient.component';
import { MedicalHistoryComponent } from './components/medical-history/medical-history.component';
import { FamilyMedicalHistoryComponent } from './components/family-medical-history/family-medical-history.component';
import { VitalSignsComponent } from './components/vital-signs/vital-signs.component';
import { PatientService } from './services/patient.service';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    MedicalHistoryComponent,
    FamilyMedicalHistoryComponent,
    VitalSignsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [PatientService],
  bootstrap: [AppComponent],
})
export class AppModule {}
