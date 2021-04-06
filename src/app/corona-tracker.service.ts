import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CoronaTrackerService {
  isScreenXs: boolean;
  isLoading: boolean;
  isEmailAlreadyExists: boolean;
  public isLoggedIn:boolean;
  _url = 'http://localhost:3000/registerUser';
  loginUrl = 'http://localhost:3000/loginUser';
  coronaInfoUrl= 'http://localhost:3000/coronaInfo';
  coronaDataUrl = 'http://localhost:3000/getCoronaData';
  questionsAndAnswersUrl = '/assets/data/questions_and_answers.json';

  public coronaData;
  public coronaDataDate;
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

  getCoronaDataFromServer():Observable<any>{
     return this._http.get<any>(this.coronaDataUrl);
    
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

  getCoronaInfo():Observable<any>{
    return this._http.get<any>(this.coronaInfoUrl);
  }

  getCoronaData(){
    return this.coronaData;
  }

  setCoronaData(data){
    console.log("service: setCoronaData: "+ data.ID);
    this.coronaData=data;
  }

  getCoronaDataDate(){
    return this.coronaDataDate;
  }

  getCoronaDataFromStorage() {
    let currentDate = formatDate(new Date(), 'yyyy/MM/dd', 'en');
    let savedCoronaDataDate = localStorage.getItem("coronaDataDate");
    this.coronaDataDate= currentDate;
    if (savedCoronaDataDate != 'undefined') {    // if data was saved at least once
      if (savedCoronaDataDate == currentDate) {
        console.log("coronaData is up to date in storage");
        let storedData: any = JSON.parse(localStorage.getItem("coronaData"));
        this.setCoronaData(storedData);
      } else {    // data in local storage needs to be updated
        localStorage.removeItem("coronaData");
        localStorage.removeItem("coronaDataDate");
        this.updateCoronaData(currentDate);
      }
    } else {   // if corona data was never saved
      this.updateCoronaData(currentDate);
    }
  }

  updateCoronaData(currentDate) {
    console.log(currentDate + ": coronaData is being updated from server");
    this.getCoronaDataFromServer().subscribe((response) => {
      if (response.message == "success") {
        localStorage.setItem("coronaData", JSON.stringify(response.data));
        localStorage.setItem("coronaDataDate", currentDate);
        this.setCoronaData(response.data);
        console.log("coronaData was updated successfuly");
      }
    });
  }

  getQuestionsAndAnswers(): Observable<any>{
    return this._http.get(this.questionsAndAnswersUrl);
  }

}
