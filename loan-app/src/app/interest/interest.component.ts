/*
    ========================================================================================================================
    ; Title: interest.component.ts
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

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss']
})
export class InterestComponent implements OnInit {
  @Input() interest: number;
  constructor() { }

  ngOnInit(): void {
  }

}
