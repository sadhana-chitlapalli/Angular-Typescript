import { Component, OnInit } from '@angular/core';
import { City } from 'app/forms/cityForms';
import { CityService } from 'app/service/city.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private cityService: CityService) { }
  cityDets = Array<City>();

  ngOnInit() {
    this.fetchCities();
  }

  // function to call fetch cities api 
  fetchCities() {
    this.cityService.fetchAllCities().subscribe(
      (res) => {
        this.cityDets = res["message"]["cities"]
      }
    )
  }

}
