import { HttpHealperService } from './../../services/HttpHealper.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Authorization } from 'src/app/services/global-services.service';

/* aos animation */
import * as AOS from 'aos';

@Component({
  selector: 'app-confirm-pass',
  templateUrl: './confirm-pass.component.html',
  styleUrls: ['./confirm-pass.component.scss'],
})
export class ConfirmPassComponent implements OnInit {
  showPassword: boolean = false;

  constructor(private http: HttpHealperService, private router: Router) {}

  showHidePassword() {
    this.showPassword = !this.showPassword;
  }

  confirmPass = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/
      ),
    ]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  get password() {
    return this.confirmPass.get('password');
  }

  get confirmPassword() {
    return this.confirmPass.get('confirmPassword');
  }

  restPassword() {
    this.postResPass();
  }

  postResPass() {
    const model = new Object({
      'email':localStorage.getItem('Email'),
      'password':this.confirmPass.controls.password.value,
      'passwordConfirm':this.confirmPass.controls.confirmPassword.value,
    });
    this.http.Post(Authorization.postRestPassowrd,model).subscribe({
      next:(res) => {
        console.log(res);
        localStorage.removeItem('Email');
        this.router.navigate(['login']);
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
