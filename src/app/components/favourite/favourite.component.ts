import { HttpHealperService } from './../../services/HttpHealper.service';
import { Component, OnInit } from '@angular/core';
import { Cards, Favorite } from 'src/app/services/global-services.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {

  constructor(private http:HttpHealperService) { }

  favouriteCard:any;
  id:any = 1;
  

  imageBaseUrl: string = 'http://75.119.137.98:901/';

  getFaavourite() {
    let header = new HttpHeaders({
      Authorization: localStorage.getItem('Token')??''
    })

    this.http.getIdHeader(Favorite.getFavorite,this.id,header).subscribe({
      next:(res)=> {
        this.favouriteCard = res.result.products;
        console.log(this.favouriteCard);

      }
    })
  }


  ngOnInit(): void {
    this.getFaavourite()
  }

}
