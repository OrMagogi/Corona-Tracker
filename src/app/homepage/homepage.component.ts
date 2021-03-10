import { Component, Input, OnInit } from '@angular/core';
import { CoronaTrackerService } from '../corona-tracker.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  constructor(private _appService:CoronaTrackerService) { }
  public isScreenXs:boolean;
  ngOnInit(): void {
    this.isScreenXs = this._appService.getIsScreenXs();
  }

}
