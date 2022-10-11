// import { btnLogin } from './../header/header.component';
import { HttpHealperService } from './../../services/HttpHealper.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

/* aos animation */
import * as AOS from 'aos';
import { Authorization } from 'src/app/services/global-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  showPassword: boolean = false;
  userLogin: any;

  successMsg: any;
  errorMsg: any;

  showHidePassword() {
    this.showPassword = !this.showPassword;
  }

  constructor(private http: HttpHealperService) {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      // Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$'),
    ]),
    checkbox: new FormControl(''),
  });

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get checkbox() {
    return this.loginForm.get('checkbox');
  }

  loginUser() {
    // console.log(this.loginForm.value);
    this.postLogin();
  }

  postLogin() {
    this.http.Post(Authorization.postLogin, this.loginForm.value).subscribe({
      next: (res) => {
        this.userLogin = res;
        this.successMsg = this.userLogin.msg;
        let token = this.userLogin.result.access_token;
        window.localStorage.setItem('Token', token);
        console.log(localStorage.getItem("Token"));

        let mail = this.loginForm.value.email;
          localStorage.setItem('Email', mail??"");

          alert(this.userLogin.msg);
        if(res.result.activate == false) {
          // location.href = 'register/verfication';
          location.href = '/home';
        } else {
            location.href = '/home';
        }
          // console.log(this.userLogin.msg);

        },
        error: (err) => {
          alert(err.error.message);
          // location.href = '/'
        // this.errorMsg = err.error.message;
      },
    });
  }

  ngOnInit(): void {
    /* aos animation */
    AOS.init();
  }
}
