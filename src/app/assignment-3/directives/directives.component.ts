import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  logs: string[] = [];
  display: boolean = true;
  toggleDisplay(): void {
    this.display = !this.display;
    this.addLog();
    console.log(this.logs);
    
  }

  addLog(): void {
    this.logs.push(new Date().toTimeString());
  }
}
