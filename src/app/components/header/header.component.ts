import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {NgbOffcanvas, OffcanvasDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  closeResult = '';

  btnLogin = false;
  btnLogout:any;
  constructor(private router:Router) {}

  logOut(): void {
    localStorage.removeItem("Token");
    localStorage.removeItem("Email");
    this.router.navigate(['login']);
    this.btnLogin = true;


  }

  checklocal() {

    let login :any = document.getElementById('btnLogin');
    let logout:any = document.getElementById('btnLogout');

    if (localStorage.getItem('Token')) {
      // console.log('Done');
      this.btnLogin = false;

    } else {
      // console.log('Login');
      this.btnLogin = true;
      // logout.classList = 'logOut';
      // console.log(login, logout);


    }
  }

  ngOnInit(): void {
    this.checklocal();
  }

}
