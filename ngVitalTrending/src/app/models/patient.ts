export class Patient {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  imageIdUrl: string;

  constructor(
    firstName: string = '',
    lastName: string = '',
    dateOfBirth: string = '',
    imageIdUrl: string = ''
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.imageIdUrl = imageIdUrl;
  }
}
