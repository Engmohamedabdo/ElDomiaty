import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };

  imageOoffers =
  [
    {
      id: 1,
      image: '../../../assets/Home/Sweets_mobile_273039.jpg',
      alt: 'photo',
      title: 'photo124',
    },
    {
      id: 2,
      image: '../../../assets/Home/Sweets_mobile_273039.jpg',
      alt: 'photo',
      title: 'photo124',
    },
    {
      id: 3,
      image: '../../../assets/Home/Sweets_mobile_273039.jpg',
      alt: 'photo',
      title: 'photo124',
    },
  ];

}
