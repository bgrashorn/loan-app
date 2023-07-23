/*
    ========================================================================================================================
    ; Title: app.component.ts
    ; Author: Brett Grashorn
    ; Bellevue University
    ; Date: 7/23/23
    ; Description: Capstone
    ; Work Cited:
    Coding Guidelines
    Instructions - Assignment 6.4 - Input Properties
    Instruction - Exercise 7.3 Form Validation
    Course GitHub
    ========================================================================================================================
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  assignment: string;

  constructor() {
  this.assignment = 'Welcome to the Loan App!';
  }
}
