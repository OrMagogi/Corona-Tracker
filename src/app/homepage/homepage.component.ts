import { Component, Input, OnInit } from '@angular/core';
import { CoronaTrackerService } from '../corona-tracker.service';
import { FormGroup, FormControl } from '@angular/forms';
import {MatBadgeModule} from '@angular/material/badge';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  constructor(private _service:CoronaTrackerService) { }
  public isScreenXs:boolean;
  ngOnInit(): void {
    this.isScreenXs = this._service.getIsScreenXs();

    
  }
}
