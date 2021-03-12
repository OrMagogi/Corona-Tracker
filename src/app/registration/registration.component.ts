import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { CoronaTrackerService } from '../corona-tracker.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb: FormBuilder,private _service: CoronaTrackerService) { }

  ngOnInit(): void {
    this._service.setIsEmailAlreadyExists(false);
  }

  get firstName(){
    return this.registrationForm.get('userInfo').get('firstName');
  }
  get lastName(){
    return this.registrationForm.get('userInfo').get('lastName');
  }
  get emailAddress(){
    return this.registrationForm.get('emailAddress');
  }
  get password(){
    return this.registrationForm.get('password');
  }
  get confirmPassword(){
    return this.registrationForm.get('confirmPassword');
  }

  registrationForm = this.fb.group({
    userInfo: this.fb.group({
      firstName: ['',[Validators.required,Validators.minLength(2),this.adminNameValidator]],
      lastName: ['',[Validators.required,Validators.minLength(2),this.adminNameValidator]],
      dateOfBirth: ['']
    }),
    emailAddress: ['',[Validators.required]],
    password: ['',[Validators.required,Validators.minLength(8)]],
    confirmPassword: ['',[Validators.required,Validators.minLength(8)]]
  },{validator: [this.passwordValidator]});

  adminNameValidator(control: AbstractControl){
    const isAdminName= /admin/.test(control.value);
    return isAdminName ? {'adminName' : {value: control.value}} : null;
  }

  passwordValidator(control: AbstractControl){
    const password= control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if(confirmPassword.pristine || password.pristine){ // return null if the user didnt change both yet
      return null;
    }
    return password && confirmPassword && password.value != confirmPassword.value ? {'passwordsDoNotMatch':true}:null;
  }

  onSubmitRegistration(){
    this._service.setIsLoading(true);
    console.log("registration component: onSubmitRegistration");
    console.log(this.registrationForm.value);
    
    this._service.registerNewUser(this.registrationForm.value);
  }
}


