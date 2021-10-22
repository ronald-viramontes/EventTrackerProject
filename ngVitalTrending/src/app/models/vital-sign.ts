export class VitalSign {
  vitalDateTime: string;
  systolicPressure: number;
  diastolicPressure: number;
  pulseRate: number;
  temperature: number;
  respiratoryRate: number;

  constructor(
    vitalDateTime: string = '',
    systolicPressure: number = 0,
    diastolicPressure: number = 0,
    pulseRate: number = 0,
    temperature: number = 0,
    respiratoryRate: number = 0
  ) {
    this.vitalDateTime = vitalDateTime;
    this.systolicPressure = systolicPressure;
    this.diastolicPressure = diastolicPressure;
    this.pulseRate = pulseRate;
    this.temperature = temperature;
    this.respiratoryRate = respiratoryRate;
  }
}
