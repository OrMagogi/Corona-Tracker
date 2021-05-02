import { Component, OnInit } from '@angular/core';
import { CoronaTrackerService } from '../corona-tracker.service';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  public isLoggedIn: boolean;
  public loggedUserEmail;
  public userDetails;
  constructor(private _service: CoronaTrackerService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.isLoggedIn = this._service.getIsLoggedIn();
    this.loggedUserEmail = localStorage.getItem("loggedUserEmail");
    this._service.getUserDetails(this.loggedUserEmail).subscribe((response)=>{
      if(response.message == 'success'){
        this.userDetails = response.data;
        console.log("userDetails: "+this.userDetails._id);
      }
    });
  }

}
