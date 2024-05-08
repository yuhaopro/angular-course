import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WarningAlertComponent } from './assignment-1/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './assignment-1/success-alert/success-alert.component';
import { DatabindingComponent } from './assignment-2/databinding/databinding.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WarningAlertComponent, SuccessAlertComponent, DatabindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-assignments';
}
