import { HttpHealperService } from './../../services/HttpHealper.service';
import {
  FormGroup,
  FormControl,
  FormControlName,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

/* aos animation */
import * as AOS from 'aos';
import { Authorization } from 'src/app/services/global-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  showPassword: boolean = false;
  registerCode:any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpHealperService,
    private router:Router

  ) {}

  showHidePassword() {
    this.showPassword = !this.showPassword;
  }

  registerForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[A-Za-z]*'),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[A-Za-z]*'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    tel: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]+'),
      Validators.minLength(8),
      Validators.maxLength(13),
    ]),
    address: new FormControl(''),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/
      ),
    ]),
    confirmPassword: new FormControl('', Validators.required),
    type: new FormControl('1'),
  });

  get firstName() {
    return this.registerForm.get('firstName');
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get tel() {
    return this.registerForm.get('tel');
  }

  get address() {
    return this.registerForm.get('address');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get type() {
    return this.registerForm.get('type');
  }

  postRegister() {
    const formData = new FormData();

    formData.append('firstName',this.registerForm.value.firstName??"");
    formData.append('lastName',this.registerForm.value.lastName??"");
    formData.append('Email',this.registerForm.value.email??"");
    formData.append('Phone',this.registerForm.value.tel??"");
    formData.append('password',this.registerForm.value.password??"");
    formData.append('PasswordConfirm',this.registerForm.value.confirmPassword??"");
    formData.append('type',this.registerForm.value.type??"");



    this.http.Post(Authorization.postRegister, formData).subscribe({
        next: (res) => {
          console.log(res);
          this.registerCode = res.result.code;
          console.log(this.registerCode);
          let mail = this.registerForm.value.email;
          localStorage.setItem('Email', mail??"");

          this.router.navigate(['register/verfication']);
          // location.href = 'register/verfication';


        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  ngOnInit(): void {
    AOS.init();
  }

  addUser() {
    // if (this.firstName?.value === '' && this.lastName?.value === '') {
    //   console.log('Done Name');
    // } else {
    //   alert('s');
    // }
    // console.log(this.registerForm.value);
    this.postRegister();
  }
}
