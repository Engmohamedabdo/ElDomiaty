import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpHealperService } from 'src/app/services/HttpHealper.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Authorization } from 'src/app/services/global-services.service';

/* aos animation */
import * as AOS from 'aos';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  showPassword: boolean = false;

  constructor(private http: HttpHealperService, private router: Router) {}

  showHidePassword() {
    this.showPassword = !this.showPassword;
  }

  confirmPass = new FormGroup({
    password: new FormControl('', [Validators.required]),
    newPassword: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/
      ),
    ]),
    newPasswordConfirm: new FormControl('', [Validators.required]),
  });

  get password() {
    return this.confirmPass.get('password');
  }

  get newPassword() {
    return this.confirmPass.get('newPassword');
  }

  get newPasswordConfirm() {
    return this.confirmPass.get('newPasswordConfirm');
  }

  restPassword() {
    this.postResPass();
  }

  postResPass() {
    let header = new HttpHeaders({
      Authorization: localStorage.getItem('Token') ?? '',
    });
    const model = new Object({
      password: this.confirmPass.controls.password.value,
      newPassword: this.confirmPass.controls.newPassword.value,
      newPasswordConfirm: this.confirmPass.controls.newPasswordConfirm.value,
    });

    // console.log(header);

    this.http
      .postPassword(Authorization.postChangePassword, model, header)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['settings']);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  ngOnInit(): void {
    /* aos animation */
    AOS.init();
  }
}
