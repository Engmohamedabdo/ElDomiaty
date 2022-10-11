import { Component, OnInit } from '@angular/core';

/* aos animation */
import * as AOS from 'aos';
import { Wallet } from 'src/app/services/global-services.service';
import { HttpHealperService } from 'src/app/services/HttpHealper.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  dataWallet:any;

  constructor(private http:HttpHealperService) { }

  wallet() {

  }

  getWallet() {

    let header = new HttpHeaders({
      Authorization: localStorage.getItem('Token')??''
    });


    this.http.getHeader(Wallet.getWallet,header).subscribe({
      next:(res) => {
        this.dataWallet = res.result;
        console.log(this.dataWallet);
      }, error:(err)=> {
        console.log(err);

      }
    })
  }


  ngOnInit(): void {
    this.getWallet();

    AOS.init();
  }

}
