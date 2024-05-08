import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WarningAlertComponent } from './assignment-1/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './assignment-1/success-alert/success-alert.component';
import { DatabindingComponent } from './assignment-2/databinding/databinding.component';
import { DirectivesComponent } from './assignment-3/directives/directives.component';
import { GameControlComponent } from './assignment-4/game-control/game-control.component';
import { OddComponent } from './assignment-4/odd/odd.component';
import { EvenComponent } from './assignment-4/even/even.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    WarningAlertComponent,
    SuccessAlertComponent,
    DatabindingComponent,
    DirectivesComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];
  title = 'angular-assignments';

  updateDisplay(numberEmitted: number): void {
    if (numberEmitted % 2 === 0) {
      this.evenNumbers.push(numberEmitted);
    } else {
      this.oddNumbers.push(numberEmitted);
    }
  }
}
