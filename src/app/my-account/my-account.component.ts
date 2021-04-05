import { Component, OnInit } from '@angular/core';
import { CoronaTrackerService } from '../corona-tracker.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  public isLoggedIn:boolean;
  constructor( private _service: CoronaTrackerService) { }

  ngOnInit(): void {
    this.isLoggedIn = this._service.getIsLoggedIn();
    
  }

}
