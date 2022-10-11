import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpHealperService } from 'src/app/services/HttpHealper.service';
import { Cards, Cart } from 'src/app/services/global-services.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  cartShopping:any ;

  number = false;
  address = false;
  copon = false;

  imageBaseUrl: string = 'http://75.119.137.98:901/';

  constructor(private http:HttpHealperService) { }

  getShopping() {
  let header = new HttpHeaders({
    Authorization:localStorage.getItem('Token')??''
  })

    this.http.getHeader(Cart.getCart,header).subscribe({
      next:(res) => {
        this.cartShopping = res.result;
        console.log(this.cartShopping);

      },error:(err) => {
        console.log(err);

      }
    })
  }

  addNumber() {
    this.number = !this.number;
  }

  addAddress() {
    this.address = !this.address;
  }

  addCopon() {
    this.copon = !this.copon;
  }

  ngOnInit(): void {
    this.getShopping();
  }

}
