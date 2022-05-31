import { AmbulanceComponent } from './components/ambulance/ambulance.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReportComponent} from './components/report/report.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'ambulance',
    component: AmbulanceComponent
  }, {
    path: 'report',
    component: ReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
