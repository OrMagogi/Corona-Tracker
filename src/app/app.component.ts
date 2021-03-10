import { Component, OnDestroy, OnInit ,Input} from '@angular/core';
import { FlexLayoutModule , MediaChange , MediaObserver} from '@angular/flex-layout';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CoronaTrackerService } from './corona-tracker.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'corona-tracker';
  public mediaSub:Subscription;
  public isScreenXs:boolean;
  constructor(public mediaObserver:MediaObserver, private _appService:CoronaTrackerService){}
  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe((result:MediaChange)=>{
      this.isScreenXs = result.mqAlias === 'xs' ? true : false;
      this._appService.setIsScreenXs(this.isScreenXs);
      console.log(this.isScreenXs);

    });
  }
  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }

}
