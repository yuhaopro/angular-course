import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-active-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './active-users.component.html',
  styleUrl: './active-users.component.css',
})
export class ActiveUsersComponent implements OnInit{
  users: string[] = [];
  counter: number | undefined;
  constructor(private userService: UserService, private counterService: CounterService) {}
  ngOnInit(): void {
    this.users = this.userService.activeUsers;
    this.counter = this.counterService.toInactiveCounter;
  }

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
    this.counterService.incrementInactiveCounter();
    this.counter = this.counterService.toInactiveCounter;
  }
}
