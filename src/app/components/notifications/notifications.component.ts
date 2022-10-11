import { HttpHealperService } from './../../services/HttpHealper.service';
import { Component, OnInit } from '@angular/core';
import { Notification } from 'src/app/services/global-services.service';

/* aos animation */
import * as AOS from 'aos';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  constructor(private http:HttpHealperService) { }


  getNotification() {
    this.http.Get(Notification.getNotification).subscribe({
      next:(res) => {
        console.log(res);

      }, error:(err) => {
        console.log(err);

      }
    })
  }

  ngOnInit(): void {
    this.getNotification();

    AOS.init();
  }

}
