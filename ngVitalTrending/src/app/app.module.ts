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
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FamilyMedicalHistoryService } from './services/family-medical-history.service';
import { MedicalHistoryService } from './services/medical-history.service';
import { VitalSignService } from './services/vital-sign.service';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    MedicalHistoryComponent,
    FamilyMedicalHistoryComponent,
    VitalSignsComponent,
    HomeComponent,
    NotFoundComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    PatientService,
    FamilyMedicalHistoryService,
    MedicalHistoryService,
    VitalSignService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
