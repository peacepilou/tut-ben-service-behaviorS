import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassDataService {

  storeDataFromAComponentForBComponent: BehaviorSubject<number> = new BehaviorSubject(0);
  
  constructor() { }
}
