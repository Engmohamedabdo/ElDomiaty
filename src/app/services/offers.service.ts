import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

interface Offer {
  id: number;
  imageurl: string;
  from: Date;
  price: number;
  name: string;
  discountPercentage: number;
}

interface Result {
  mesg: string;
  result: Offer[];
}
@Injectable({
  providedIn: 'root',
})
export class OffersService {
  constructor(private http: HttpClient) {}

  getOffers() {
    return this.http
      .get<Result>('http://api.zigzag.orialserver.com/api/Home/details/')
      .pipe(
        map((result) => {
          return result.result;
        })
      );
  }
}
