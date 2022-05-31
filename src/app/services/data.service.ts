import { AmbulanceData } from './../models/data';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  public BASE_URL = 'http://localhost:8285/ambulnce-mngmnt/';
  private headers;

  constructor(private httpClient: HttpClient) { }

  // patientData: AmbulanceData[] = this.GetExampleJSON().ambulanceRecords;

  // GetExampleJSON() {
  //   const exampleJSON = {
  //     ambulanceRecords: [
  //       { id: 1, licensePlate: 'Rohit', vehicleModel: 'Joes', other: 'IN-3123'}
  //     ]
  //   };
  //   return exampleJSON;
  // }



  GetAmbulanceDatas() {

    return this.httpClient.get(this.BASE_URL + 'api/view-all/' , {headers: this.headers});
  }

  GetAllTripDetails() {

    return this.httpClient.get(this.BASE_URL + 'api/view-all-trips' , {headers: this.headers});
  }
  AddAmbulance(newAmbulance: AmbulanceData, type): Observable<any> {
    if (type === 'add') {
      console.log('newAmbulance');
      console.log(newAmbulance);
      return this.httpClient.post(this.BASE_URL + 'api/register-ambulance/' , newAmbulance , {headers: this.headers});
    } else {
      console.log('update Ambulance');
      console.log(newAmbulance);
      return this.httpClient.post(this.BASE_URL + 'api/update-ambulance/' , newAmbulance , {headers: this.headers});
    }
  }

  removeRecord(ambulance: AmbulanceData) {
    return this.httpClient.post(this.BASE_URL + 'api/remove-ambulance/' , ambulance , {headers: this.headers});
  }

  updateAmbulanceStatus(id: string, key: string, dName: string, tripType: string) {
    return this.httpClient.get(this.BASE_URL + 'api/update-status/' + key + '/' + id + '/' + dName + '/' + tripType,
      {headers: this.headers});
  }
}
