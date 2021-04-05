import { Component, OnInit } from '@angular/core';
import { CoronaTrackerService } from '../corona-tracker.service';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-global-statistics',
  templateUrl: './global-statistics.component.html',
  styleUrls: ['./global-statistics.component.css']
})
export class GlobalStatisticsComponent implements OnInit {
  public isLoggedIn:boolean;
  public coronaData;
  public globalCoronaData;
  public coronaDataDate;
  public selectedCountry;
  public selectedCountryData;
  public isScreenXs;
  constructor( private _service: CoronaTrackerService) { }

  ngOnInit(): void {
    this.isLoggedIn = this._service.getIsLoggedIn();
    this.isScreenXs = this._service.getIsScreenXs();
    console.log("statistics: isLoggedIn: "+ this.isLoggedIn);
    this._service.getCoronaDataFromStorage();
    let val = this._service.getCoronaData();
    console.log("statistics: coronaData: ID: "+val.ID);
    this.coronaData = val.Countries;
    this.globalCoronaData = val.Global;
    this.coronaDataDate = this._service.getCoronaDataDate();
    this.selectedCountry="Country";
    this.selectedCountryData = {"newConfirmed": "","totalConfirmed":"","newDeaths": "","totalDeaths":"","newRecovered": "","totalRecovered":""};
  }

  handleSelectedCountry(){
    console.log("selectedCountry: "+this.selectedCountry);
    this.coronaData.forEach(element => {
      if(element.Country == this.selectedCountry){
        this.selectedCountryData.newConfirmed = element.NewConfirmed;
        this.selectedCountryData.totalConfirmed = element.TotalConfirmed;
        this.selectedCountryData.newDeaths = element.NewDeaths;
        this.selectedCountryData.totalDeaths = element.TotalDeaths;
        this.selectedCountryData.newRecovered = element.NewRecovered;
        this.selectedCountryData.totalRecovered = element.TotalRecovered;
      }
    });
  }

}
