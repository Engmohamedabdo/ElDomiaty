import { HttpHeaders } from '@angular/common/http';
import { HttpHealperService } from './../../services/HttpHealper.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Profile, Authorization } from 'src/app/services/global-services.service';

/* aos animation */
import * as AOS from 'aos';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user:any;
  file:any;
  url:any;
  

  imageBaseUrl: string = 'http://75.119.137.98:901/';

  constructor(private http:HttpHealperService) { }

  profileForm = new FormGroup({
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
    img: new FormControl('', [Validators.required]),
  })

  get firstName() {
    return this.profileForm.get('firstName');
  }

  get lastName() {
    return this.profileForm.get('lastName');
  }

  get email() {
    return this.profileForm.get('email');
  }

  get tel() {
    return this.profileForm.get('tel');
  }

  get img() {
    return this.profileForm.get('img');
  }

  onFileChanged(event: any) {
    this.file = event.target.files[0];
    this.url = event.target.result;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.url = reader.result
        // this.cdRef.detectChanges();
      }
      reader.readAsDataURL(event.target.files[0]);
    };
  };

  editProfile() {
    this.PutProfile();
  }



  PutProfile() {

    const formData = new FormData();
    formData.append('FirstName',this.profileForm.value.firstName??'');
    formData.append('LastName',this.profileForm.value.lastName??'');
    formData.append('Email',this.profileForm.value.email??'');
    formData.append('Phone',this.profileForm.value.tel??'');
    formData.append('Img',this.file, this.file?.img??'');

    let header = new HttpHeaders({
      Authorization: localStorage.getItem('Token')??''
    })


    this.http.Put(Profile.putUser,formData,header).subscribe({
      next:(res) => {
        console.log(res);

      }, error:(err) => {
        console.log(err);

      }
    })

  }




  getProfile() {

    let header = new HttpHeaders({
      Authorization: localStorage.getItem('Token')??''
    })

    this.http.getHeader(Profile.getUser,header).subscribe({
      next:(res) => {
        this.user = res.result.user;
        console.log(this.user);

      }, error:(err) => {
        console.log(err);

      }
    })
  }






  ngOnInit(): void {

    this.getProfile();

    /* aos animation */
    AOS.init();
  }





















  // editProfile = new FormGroup({
  //   userName: new FormControl(null, Validators.required),
  //   email: new FormControl(null, Validators.required),
  //   address: new FormControl(null, Validators.required),
  //   phone: new FormControl(null, Validators.required),
  //   test: new FormControl(null, Validators.required),
  // });

  // get userName() {
  //   return this.editProfile.get('userName');
  // }

  // get email() {
  //   return this.editProfile.get('email');
  // }

  // get address() {
  //   return this.editProfile.get('address');
  // }

  // get phone() {
  //   return this.editProfile.get('phone');
  // }

  // get test() {
  //   return this.editProfile.get('test');
  // }




}
