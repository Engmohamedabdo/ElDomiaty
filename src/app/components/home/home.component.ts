import { HttpHeaders } from '@angular/common/http';
import { HttpHealperService } from './../../services/HttpHealper.service';
import { Component, Input, OnInit } from '@angular/core';
import { baseUrlGlobal, Home } from 'src/app/services/global-services.service';
import { BehaviorSubject } from 'rxjs';
import { OwlOptions } from 'ngx-owl-carousel-o';

import SwiperCore, {
  Keyboard,
  Pagination,
  Navigation,
  Virtual,
  Swiper,
} from 'swiper';
import { NguCarouselConfig } from '@ngu/carousel';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);

/* aos animation */
import * as AOS from 'aos';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  allOffers: any;
  allCategories: any;
  allRecommended: any;
  allPopular: any;
  imageOffers: any;

  imageBaseUrl: string = 'http://75.119.137.98:901/';

  constructor(private Http: HttpHealperService) {}

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  getAllOffers() {
    this.Http.Get(Home.GetDetailsOffers).subscribe({
      next: (res) => {
        this.allOffers = res.result.offers;
        console.log(this.allOffers);

        // res.result.offers.forEach((value: any) => {
        //   this.allOffers = value;
        //   this.imageOffers = this.imageBaseUrl+this.allOffers?.imageurl;
        //   console.log(this.imageOffers);

        // });
        // for (let i = 0; i < this.allOffers.length; i++) {
        //   this.carouselItems.push(this.allOffers[i].imageurl)
        // }
        // console.log('aaaaaaaaaaaaaaa');

        // console.log(this.carouselItems);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getCatgorys() {
    this.Http.Get(Home.GetCategoryAll).subscribe({
      next: (response) => {
        this.allCategories = response.result.categorys;
        // console.log(response);
      },
      error: (error) => {
        // console.log(error);
      },
    });
  }

  getRecommended() {
    this.Http.Get(Home.GetDetails).subscribe({
      next: (res) => {
        this.allRecommended = res.result.recommended;
        // console.log(this.allRecommended + 'recommended');
      },
    });
  }

  getPopular() {
    this.Http.Get(Home.GetDetails).subscribe({
      next: (res) => {
        this.allPopular = res.result.popular;
        // console.log(this.allPopular + 'populer');
      },
    });
  }

  slides$ = new BehaviorSubject<string[]>(['']);

  ngOnInit(): void {
    this.getAllOffers();
    this.getCatgorys();
    this.getRecommended();
    this.getPopular();

    AOS.init();
    // console.log(this.allOffers);
  }

  // swiper
  swiper = new Swiper('.mySwiper', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  slides = [
    'https://m.media-amazon.com/images/I/71JjpVbkmKL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg',
  ];

  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 3,
    interval: { timing: 500, initialDelay: 500 },
    loop: true,
    touch: true,
    velocity: 0.2,
  };

  carouselItems = [
    'https://m.media-amazon.com/images/I/71JjpVbkmKL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg',
  ];

  // carouselItems = this.allOffers;

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    // center: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      500: {
        items: 1,
      },
      800: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    },
    nav: false,
  };

  imageOoffers =
  [
    { image: '../../../assets/Home/Sweets_mobile_273039.jpg' },
    { image: '../../../assets/Home/Sweets_mobile_273039.jpg' },
    { image: '../../../assets/Home/Sweets_mobile_273039.jpg' },
    { image: '../../../assets/Home/Sweets_mobile_273039.jpg' },
    { image: '../../../assets/Home/Sweets_mobile_273039.jpg' },
    { image: '../../../assets/Home/Sweets_mobile_273039.jpg' },
    { image: '../../../assets/Home/Sweets_mobile_273039.jpg' },
    { image: '../../../assets/Home/Sweets_mobile_273039.jpg' },
    { image: '../../../assets/Home/Sweets_mobile_273039.jpg' },
    { image: '../../../assets/Home/Sweets_mobile_273039.jpg' },
    { image: '../../../assets/Home/Sweets_mobile_273039.jpg' },
    { image: '../../../assets/Home/Sweets_mobile_273039.jpg' },
  ];
}
