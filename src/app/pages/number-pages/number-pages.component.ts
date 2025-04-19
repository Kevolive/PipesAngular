import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-number-pages',
  imports: [DecimalPipe, PercentPipe, CurrencyPipe],
  templateUrl: './number-pages.component.html',
})
export default class NumberPagesComponent {

  totalSells = signal(2_433_232.5567);
  percent = signal(0.4856);
}
