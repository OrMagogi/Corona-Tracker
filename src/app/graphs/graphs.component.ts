import { Component, OnInit } from '@angular/core';
import { CoronaTrackerService } from '../corona-tracker.service';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {

  public isLoggedIn:boolean;
  public panelOpenState ;
  public questionsAndAnswers;
  constructor( private _service: CoronaTrackerService) { }

  ngOnInit(): void {
    this.isLoggedIn = this._service.getIsLoggedIn();
    this.panelOpenState = false;
    this._service.getQuestionsAndAnswers().subscribe((response)=>{
      this.questionsAndAnswers = response;      
    });
  }

}
