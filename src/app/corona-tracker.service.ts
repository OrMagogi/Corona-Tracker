import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoronaTrackerService {
  isScreenXs:boolean;
  constructor() { }

  setIsScreenXs(data:boolean){
    this.isScreenXs=data;
  }
  getIsScreenXs(){
    return this.isScreenXs;
  }
}
