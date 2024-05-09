import { Injectable } from '@angular/core';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  toActiveCounter: number = 0;
  toInactiveCounter: number = 0;
  constructor() {}

  incrementActiveCounter() {
    this.toActiveCounter++;
    console.log(this.toActiveCounter);
    
  }

  incrementInactiveCounter() {
    this.toInactiveCounter++;
    console.log(this.toInactiveCounter);
    
  }
}
