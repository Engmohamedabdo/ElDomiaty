import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { cards } from './cards';
import { baseUrlFace, Cards, Home } from './../../services/global-services.service';
import { HttpHealperService } from './../../services/HttpHealper.service';
import { Component, OnInit } from '@angular/core';

  /* aos animation */
import * as AOS from 'aos';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss'],
})
export class AllProductComponent implements OnInit {
  cards: any;
  productId: any;

  imageBaseUrl: string = 'http://75.119.137.98:901/';
  // cardId:cards = new cards();

  favourite: boolean = false;

  // favouriteGroup = new FormGroup({
  //   id: new FormControl(null),
  // });
  constructor(
    private http: HttpHealperService,
    private route: ActivatedRoute
  ) {}

  // getCard() {
  //   this.http.GetCard(Cards.getCard).subscribe({
  //     next: (res) => {
  //       this.cards = res.card;
  //       // console.log(this.cards);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //   });
  // }


  getAllProduct() {
    this.http.Get(Home.GetCategory).subscribe({
      next: (res) => {
        this.cards = res.result.products;
        for (let i = 0; i < this.cards.length; i++) {
          // console.log(i);
          this.productId = this.cards[i].id;
          console.log(this.productId);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  // addFavourit() {
  //   this.http.postCard(Cards.postCard, this.favouriteGroup.value).subscribe({
  //     next: (res) => {
  //       console.log(res);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //   });
  // }

  // postCard()
  //  {

  //   let model =
  //   {

  //   }

  //   this.http.postCard(Cards.getCard,).subscribe({
  //     next: (res) => {
  //       this.cards = res.card;
  //       // console.log(this.cards);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //   });
  // }

  addFavourite(card: any) {
    this.cards = card;
    console.log(this.cards);

    this.favourite == !this.favourite;
  }

  getId(id: any) {
    this.productId = id;
    console.log(this.productId);
  }

  ngOnInit(): void {
    this.getAllProduct();

    AOS.init();
  }
}
