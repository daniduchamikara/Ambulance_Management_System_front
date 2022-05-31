import { DataService } from './../../services/data.service';
import { AmbulanceData } from './../../models/data';
import { Component, OnInit , ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public ambulance: AmbulanceData[];
  count: number;
  public driverName = null;
  public tripType = null;
  ambulanceForm: FormGroup;

  constructor(private dataService: DataService, private formBuilder: FormBuilder , public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataService.GetAmbulanceDatas().subscribe(

      (result: any ) => {
        this.ambulance = result;
        console.log(this.ambulance);
      });
    this.ambulanceForm = this.formBuilder.group({
      ambulanceId: '',
      licensePlate: '',
      vehicleModel: '',
      other: ''
    });
    // this.count = this.ambulance;
  }

  updateAmbulance(id: string, key: string , tripType , driverName) {
    console.log(id);
    console.log(key);
    console.log(tripType);
    console.log(driverName);
    if (driverName !== '') {
      this.dataService.updateAmbulanceStatus(id, key, driverName, tripType).subscribe();
      this.refresh();
    } else {
      alert('please enter driver name');
    }
  }
  refresh(): void {
    window.location.reload();
  }
}

