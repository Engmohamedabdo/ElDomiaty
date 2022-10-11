import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Favorite } from 'src/app/services/global-services.service';
import { HttpHealperService } from 'src/app/services/HttpHealper.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

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
