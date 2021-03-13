import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Injectable({
  providedIn: 'root'
})
export class CoronaTrackerService {
  isScreenXs: boolean;
  isLoading: boolean;
  isEmailAlreadyExists: boolean;
  private isLoggedIn:boolean;
  _url = 'http://localhost:3000/registerUser';
  loginUrl = 'http://localhost:3000/loginUser';
  constructor(private _http: HttpClient) { }

  setIsScreenXs(data: boolean) {
    this.isScreenXs = data;
  }
  getIsScreenXs() {
    return this.isScreenXs;
  }

  registerNewUser(data: any) {
    console.log("service: registerNewUser: " + data);
    let val = this._http.post<any>(this._url, data).subscribe(response => {
      if (response.message == 'success') {
        alert("new user registed successfully");
      } else {
        if (response.message == 'Email already exists') {
          this.isEmailAlreadyExists = true;
        }
        alert(response.message);
      }
    });
    this.isLoading = false;
    return val;
  }

  loginUser( enteredEmail: String , enteredPassword: String): Observable<any>{
    return this._http.post<any>(this.loginUrl,{"enteredEmail": enteredEmail, "enteredPassword": enteredPassword });
  }

  setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  getIsLoading() {
    return this.isLoading;
  }

  setIsEmailAlreadyExists(isEmailAlreadyExists: boolean) {
    this.isEmailAlreadyExists = isEmailAlreadyExists;
  }

  getIsEmailAlreadyExists() {
    return this.isEmailAlreadyExists;
  }

  setIsLoggedIn(isLoggedIn:boolean){
    this.isLoggedIn = isLoggedIn;
  }
  getIsLoggedIn(){
    return this.isLoggedIn;
  }

}
