import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'zigzag1';
  public loading = true;

  constructor(private spinner: NgxSpinnerService){ }

  ngOnInit() {
    //Scroll to top:
    window.scroll(0,0);

    // /** spinner starts on init */
      this.spinner.show();

     setTimeout(() => {
       /** spinner ends after 5 seconds */
        this.spinner.hide();
     }, 2000);

  }
}
