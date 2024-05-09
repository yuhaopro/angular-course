import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-inactive-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inactive-users.component.html',
  styleUrl: './inactive-users.component.css'
})
export class InactiveUsersComponent implements OnInit{
  users: string[] = [];
  counter: number | undefined;
  constructor(private userService: UserService, private counterService: CounterService) {}

  ngOnInit(): void {
    this.users = this.userService.inactiveUsers;
    this.counter = this.counterService.toActiveCounter;

  }

  onSetToActive(id: number) {
    this.userService.setToActive(id);
    this.counterService.incrementActiveCounter();
    this.counter = this.counterService.toActiveCounter;

  }
}
