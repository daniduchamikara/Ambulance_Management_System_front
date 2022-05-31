export class TripData {
  tripId: any;
  ambulanceId: any;
  driverName: any;
  tripType: any;
  createdDate: any;


  constructor(tripId: any, ambulanceId: any, driverName: any, tripType: any, createdDate: any) {
    this.tripId = tripId;
    this.ambulanceId = ambulanceId;
    this.driverName = driverName;
    this.tripType = tripType;
    this.createdDate = createdDate;
  }
}
