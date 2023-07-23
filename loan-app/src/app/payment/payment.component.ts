/*
    ========================================================================================================================
    ; Title: payment.component.ts
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
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  @Input() payment: number;
  constructor() { }

  ngOnInit(): void {
  }

}
