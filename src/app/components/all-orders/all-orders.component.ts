import { Component, OnInit } from '@angular/core';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss'],
})
export class AllOrdersComponent implements OnInit {
  previous = true;
  current = false;
  btnC:any;
  btnP:any;


  constructor() {}

  ngOnInit(): void {
    this.previousOrders();
    this.currentOrders();
  }

  previousOrders() {
    this.previous = false;
    this.current = true;
    let btnPrevious = document.getElementById('previous');
    this.btnP = btnPrevious;
    btnPrevious?.classList.add('active');
    this.btnC?.classList.remove('active');
  }
  currentOrders() {
    this.previous = true;
    this.current = false;
    let btnCurrent = document.getElementById('current');
    this.btnC = btnCurrent;
    btnCurrent?.classList.add('active');
    this.btnP?.classList.remove('active');
  }
}
