import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss'],
})
export class AllOrdersComponent implements OnInit {
  previous = true;
  current = false;

  constructor() {}

  ngOnInit(): void {}

  PreviousOrders() {
    this.previous = false;
    this.current = true;
  }
  CurrentOrders() {
    this.previous = true;
    this.current = false;
  }
}
