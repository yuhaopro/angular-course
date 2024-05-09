import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActiveUsersComponent } from './assignment-5/active-users/active-users.component';
import { InactiveUsersComponent } from './assignment-5/inactive-users/inactive-users.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ActiveUsersComponent, InactiveUsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    // removes the user at that id from the activeUsers array
    this.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    // remove the users at that id from the inactiveUsers array
    this.inactiveUsers.splice(id, 1);
  }
}
