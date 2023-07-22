import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loanData: FormGroup;

  payment: number = 0;
  interest: number = 0;

  constructor(private fb: FormBuilder) {} 
    

  ngOnInit(): void {
    this.loanData = this.fb.group({
      amount: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9.]*$'),
        ]),
      ],
      interest: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9.]*$'),
        ]),
      ],
      years: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]*$'),
        ]),
      ],
    });
  }

  get form() {
    return this.loanData.controls;
  }

  calcResults() {
    let formValues = this.loanData.value;
    let amount = parseFloat(formValues.amounts);
    let interest = parseFloat(formValues.interest);
    let years = parseFloat(formValues.years);

    let months = (years *12);

    let ratePerPeriod = ((interest / 100) / 12);

    this.payment = 
      (amount = (ratePerPeriod * Math.pow((ratePerPeriod + 1), months))) /
      (Math.pow((1 + ratePerPeriod), months) - 1);

      this.interest = (this.payment * months) - amount;
  }

  clearEntries() {
    this.payment = 0;
    this.interest = 0;
    this.loanData.reset();
  }
    
    }
