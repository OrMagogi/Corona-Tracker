import { Component, OnInit } from '@angular/core';
import { CoronaTrackerService } from '../corona-tracker.service';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {

  public isLoggedIn:boolean;
  constructor( private _service: CoronaTrackerService) { }

  ngOnInit(): void {
    this.isLoggedIn = this._service.getIsLoggedIn();
    
  }

}
