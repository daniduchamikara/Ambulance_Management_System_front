export class AmbulanceData {
  ambulanceId: number;
  licensePlate: string;
  vehicleModel: string;
  other: string;
  status: string;

  constructor(ambulanceObject: any) {
    this.ambulanceId = ambulanceObject.ambulanceId;
    this.vehicleModel = ambulanceObject.vehicleModel;
    this.licensePlate = ambulanceObject.licensePlate;
    this.other = ambulanceObject.other;
    this.status = ambulanceObject.status;
  }
}
