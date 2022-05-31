import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {TripData} from '../../models/trip';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private dataService: DataService) { }
  public trips: TripData[];

  ngOnInit(): void {

    this.dataService.GetAllTripDetails().subscribe(

      (result: any ) => {
        this.trips = result;
        console.log(this.trips);
      });
  }

}
