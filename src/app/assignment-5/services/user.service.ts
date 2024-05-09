import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    // removes the user at that id from the activeUsers array
    this.activeUsers.splice(id, 1);
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    // remove the users at that id from the inactiveUsers array
    this.inactiveUsers.splice(id, 1);
  }
}
