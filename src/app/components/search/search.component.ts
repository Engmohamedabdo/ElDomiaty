import { FormGroup, FormControl } from '@angular/forms';
import { Search } from './../../services/global-services.service';
import { HttpHealperService } from './../../services/HttpHealper.service';
import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { Cards } from 'src/app/services/global-services.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  cards: any;

  selectOption:any;
  selectOptions:any;

  constructor(private http:HttpHealperService) { }

  searchForm = new FormGroup({
    categoryId: new FormControl(''),
    text: new FormControl(''),
    priceRange: new FormControl(''),
  })

  getSelect() {
    // this.http.postHeader(Search.postSearch+'1',)
    // this.selectOptions = this.selectOption;
  }

  getSearch() {
    this.http.GetCard(Cards.getCard).subscribe({
      next:(res) => {
        this.cards = res.card;
      },
      error:(err) => {
        console.log(err);

      }
    })
  }

  ngOnInit(): void {
    this.getSearch();
    // this.getSelect();
  }

  value: number = 50;
  highValue: number = 150;
  options: Options = {
    floor: 0,
    ceil: 200
  };

}
