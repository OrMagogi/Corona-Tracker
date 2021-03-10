import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CoronaTrackerService {
  isScreenXs:boolean;
  isLoading:boolean;
  _url = 'http://localhost:3000/registerUser';
  constructor(private _http: HttpClient) { }

  setIsScreenXs(data:boolean){
    this.isScreenXs=data;
  }
  getIsScreenXs(){
    return this.isScreenXs;
  }

  registerNewUser(data:any){
    console.log("service: registerNewUser: "+data);
    let val= this._http.post<any>(this._url,data).subscribe(response =>{
      if(response.message == 'success'){
        alert("new user registed successfully");
      } else{
        alert("error: "+response.message);
      }
    });
    return val;
  }

  setIsLoading(isLoading:boolean){
    this.isLoading= isLoading;
  }

  getIsLoading(){
    return this.isLoading;
  }
}
