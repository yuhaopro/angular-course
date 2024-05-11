import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

/**
 * Assignment 6 Form Guideline
 *
 * @description
 * display warning message if the form is invalid and touched
 * display a warning message below each input if invalid
 * Upon submitting, print the value of the form to the console
 */

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  @ViewChild('form') subscriptionForm: NgForm | undefined;
  ngOnInit(): void {}
  title: string = 'angular-assignments';
  defaultSubscription = 'Basic';
  subscriptions: string[] = ['Basic', 'Advanced', 'Pro'];
  onSubmit() {
    console.log(this.subscriptionForm?.value.email);
    console.log(this.subscriptionForm?.value.subscription);
    console.log(this.subscriptionForm?.value.password);
  }
}
