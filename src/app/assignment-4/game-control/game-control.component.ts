import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { EvenComponent } from '../even/even.component';
import { OddComponent } from '../odd/odd.component';

@Component({
  selector: 'app-game-control',
  standalone: true,
  imports: [EvenComponent, OddComponent],
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  @Output() gameEvent: EventEmitter<number> = new EventEmitter<number>();
  gameStarted: boolean = false;
  counter: number = 0;
  // https://stackoverflow.com/questions/42940954/cannot-find-namespace-nodejs-after-webpack-upgrade
  intervalId: NodeJS.Timeout | undefined;
  startGame() {
    // start emitting an event incrementing the number
    this.gameStarted = true;
    console.log('game started');
    this.intervalId = setInterval(() => {
      this.gameEvent.emit(this.counter);
      this.counter++;
    }, 1000); 
  }

  stopGame() {
    this.gameStarted = false;
    clearInterval(this.intervalId);
  }
}
