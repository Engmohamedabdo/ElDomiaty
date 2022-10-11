import { Product } from './../../services/global-services.service';
import { HttpHealperService } from './../../services/HttpHealper.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  reviews: any;
  imageBaseUrl: string = 'http://75.119.137.98:901/';


  constructor(private http:HttpHealperService) { }

  getReviews() {
    this.http.Get(Product.getReviews).subscribe({
      next:(res) => {
        this.reviews = res.result.reviews
        console.log(this.reviews);

      }, error:(err) => {
        console.log(err);

      }
    })
  }


  ngOnInit(): void {
    this.getReviews();
  }

}
