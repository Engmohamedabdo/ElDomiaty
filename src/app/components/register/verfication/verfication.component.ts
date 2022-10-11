import { Router } from '@angular/router';
import { HttpHealperService } from './../../../services/HttpHealper.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Authorization } from 'src/app/services/global-services.service';

@Component({
  selector: 'app-verfication',
  templateUrl: './verfication.component.html',
  styleUrls: ['./verfication.component.scss']
})
export class VerficationComponent implements OnInit {
  code:any;


  constructor(private http:HttpHealperService, private router:Router) {  }


  verficationForm = new FormGroup({
    otp: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required]),


  });

  get otp() {
    return this.verficationForm.get('otp');
  }

  verficationCode() {
    this.PostOtp();
  }

    PostOtp() {

      let mail=localStorage.getItem('Email');

      if(mail ='') {
        this.router.navigate(['login']);
      } else {
        const model = new Object({
          'email':localStorage.getItem('Email'),
          'code':this.verficationForm.controls.otp.value,
        });
        this.http.Post(Authorization.postVerfication,model).subscribe({
          next:(res) => {
            console.log(res);
          },error:(err) => {
            console.log(err);
          }
        })
      }

    }

    resendCode() {

      const model = new Object({
        'user_email': localStorage.getItem('Email')
      })
      this.http.Post(Authorization.postResetCode,model).subscribe({
        next:(res) => {
          this.code = res.result.code;
          console.log(this.code);
        },error:(err) => {
          console.log(err);

        }
      })
    }


  ngOnInit(): void {
    /* aos animation */
    // AOS.init();
  }

}
