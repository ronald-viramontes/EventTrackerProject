import { Patient } from './patient';

export class MedicalHistory {
  id: number;
  diagnosis: string;
  dateVerified: string;

  constructor(
    id: number = 0,
    diagnosis: string = '',
    dateVerified: string = ''
  ) {
    this.id = id;
    this.diagnosis = diagnosis;
    this.dateVerified = dateVerified;
  }
}
