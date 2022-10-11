import { Product } from './../../services/global-services.service';
import { HttpHealperService } from './../../services/HttpHealper.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  // cities: any;

  // selectedCity: City;

  optionSize = [{ size: 'S' }, { size: 'M' }, { size: 'L' }];

  id: any;
  details: any;

  currentRating = 3;

  imageBaseUrl: string = 'http://75.119.137.98:901/';

  images = [
    '../../assets/images/gallery-1.jpg',
    '../../assets/images/gallery-2.jpg',
    '../../assets/images/gallery-3.jpg',
    '../../assets/images/gallery-4.jpg',
    '../../assets/images/gallery-1.jpg',
    '../../assets/images/gallery-2.jpg',
    '../../assets/images/gallery-3.jpg',
    '../../assets/images/gallery-4.jpg',
  ];

  rating3: number;
  // public form: FormGroup;

  image: any;
  OwlOptions: any;
  constructor(
    private http: HttpHealperService,
    private fb: FormBuilder,
    private ActivatedRoute: ActivatedRoute
  ) {
    //   this.cities = [
    //     {size: 'L'},
    //     {size: 'M'},
    //     {size: 'S'},
    // ];

    this.id = this.ActivatedRoute.snapshot.params['id'];
    this.rating3 = 0;
    // this.form = this.fb.group({
    //   rating1: ['', Validators.required],
    //   rating2: [4],
    // });

    this.OwlOptions = {
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
        300: {
          items: 2,
        },
        740: {
          items: 3,
        },
        940: {
          items: 4,
        },
      },
      nav: false,
    };

    // this.id = ActivatedRoute.snapshot.params.id
  }

  getProductDetails() {
    this.http.GetByQuery(Product.getDetails, this.id).subscribe({
      next: (res) => {
        this.details = res.result.products;
        console.log(this.details[0]);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {
    this.getProductDetails();
    this.image = this.details;
    this.onChangeImage(this.image);
  }

  onChangeImage(image: any) {
    this.image = image;
    console.log(this.image);
  }
}
