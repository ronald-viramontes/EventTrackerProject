import { FamilyMedicalHistory } from './family-medical-history';
import { MedicalHistory } from './medical-history';
import { VitalSign } from './vital-sign';

export class Patient {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  imageIdUrl: string;
  vitalSigns: VitalSign;
  familyMedicalHistory: FamilyMedicalHistory;
  medicalHistory: MedicalHistory;

  constructor(
    id: number = 0,
    firstName: string = '',
    lastName: string = '',
    dateOfBirth: string = '',
    imageIdUrl: string = '',
    vitalSigns: VitalSign = new VitalSign(),
    familyMedicalHistory: FamilyMedicalHistory = new FamilyMedicalHistory(),
    medicalHistory: MedicalHistory = new MedicalHistory()
  ) {
    // patient.vitals;
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.imageIdUrl = imageIdUrl;
    this.vitalSigns = vitalSigns;
    this.familyMedicalHistory = familyMedicalHistory;
    this.medicalHistory = medicalHistory;
  }
}
