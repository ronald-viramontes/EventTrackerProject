import { Patient } from './patient';

export class FamilyMedicalHistory {
  id: number;
  medicalCondition: string;
  familyRelation: string;

  constructor(
    id: number = 0,
    medicalCondition: string = '',
    familyRelation: string = ''
  ) {
    this.id = id;
    this.medicalCondition = medicalCondition;
    this.familyRelation = familyRelation;
  }
}
