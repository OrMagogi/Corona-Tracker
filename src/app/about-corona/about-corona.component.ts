import { Component, OnInit } from '@angular/core';
import { CoronaTrackerService } from '../corona-tracker.service';

@Component({
  selector: 'app-about-corona',
  templateUrl: './about-corona.component.html',
  styleUrls: ['./about-corona.component.css']
})
export class AboutCoronaComponent implements OnInit {
  public coronaInfo;
  constructor(private _service: CoronaTrackerService) { }

  ngOnInit(): void {
    this._service.getCoronaInfo().subscribe((data)=>{
      this.coronaInfo= data.message;
    });
  }

}
