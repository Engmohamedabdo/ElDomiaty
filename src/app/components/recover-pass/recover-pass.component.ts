import { Router } from '@angular/router';
import { HttpHealperService } from './../../services/HttpHealper.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

/* aos animation */
import * as AOS from 'aos';
import { Authorization } from 'src/app/services/global-services.service';

@Component({
  selector: 'app-recover-pass',
  templateUrl: './recover-pass.component.html',
  styleUrls: ['./recover-pass.component.scss'],
})
export class RecoverPassComponent implements OnInit {
  otpCode: boolean = false;
  sentMail:any;

  constructor(private http: HttpHealperService, private router:Router) {}

  recoverForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  otpForm = new FormGroup({
    otp: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  get email() {
    return this.recoverForm.get('email');
  }

  get otp() {
    return this.recoverForm.get('otp');
  }

  recoverPassword() {
    this.postEmail();
  }

  postEmail() {
    // const emailForm = new FormData();

    // emailForm.append('email', this.recoverForm.value.email ?? '');

    this.http.Post(Authorization.postForgetPassowrd, this.recoverForm.value).subscribe({
      next: (res) => {
        console.log(res.result.code);
        this.otpCode = true;
        this.sentMail = this.recoverForm.value.email;
        localStorage.setItem('Email', this.sentMail);
      },
      error: (err) => {
        console.log(err);
      },
    });

    // console.log(this.recoverForm.value);
  }

  sendOtp() {
    const model = new Object({
      'email':localStorage.getItem('Email'),
      'code':this.otpForm.controls.otp.value,
    });
    this.http.Post(Authorization.postVerfication,model).subscribe({
      next:(res) => {
        console.log(res);
        this.router.navigate(['confirmPass']);
      },error:(err) => {
        console.log(err);
      }
    })
  }

  ngOnInit(): void {
    /* aos animation */
    AOS.init();
  }
}
