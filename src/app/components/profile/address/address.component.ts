import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Utilt, Address } from './../../../services/global-services.service';
import { HttpHealperService } from 'src/app/services/HttpHealper.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  @ViewChild('edit') edit: any;
  @ViewChild('delete') delete: any;

  allAddress: any;
  addressId: any;
  regions: any;
  citys: any;
  id: any = 1;

  constructor(
    private http: HttpHealperService,
    private httpClient: HttpClient
  ) {}

  getUtiltRegions() {
    let header = new HttpHeaders({
      Authorization: localStorage.getItem('Token') ?? '',
    });

    this.http.getHeader(Utilt.getUtiltRegions, header).subscribe({
      next: (res) => {
        this.regions = res.result.region;
        // console.log(this.regions);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getUtiltCity() {
    let header = new HttpHeaders({
      Authorization: localStorage.getItem('Token') ?? '',
    });

    this.http.getHeader(Utilt.GetRegionOrCity, header).subscribe({
      next: (res) => {
        this.citys = res.result.regiorcity;
        // console.log(this.citys);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  addressForm = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[A-Za-z]*'),
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[A-Za-z]*'),
    ]),
    adressdetails: new FormControl('', [Validators.required]),
    phonenumber: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]+'),
      Validators.minLength(8),
      Validators.maxLength(13),
    ]),
    cityid: new FormControl('0'),
    isdefault: new FormControl('', Validators.requiredTrue),
    id: new FormControl('1'),
  });

  get firstname() {
    return this.addressForm.get('firstname');
  }

  get lasttname() {
    return this.addressForm.get('lasttname');
  }

  get adressdetails() {
    return this.addressForm.get('adressdetails');
  }

  get phonenumber() {
    return this.addressForm.get('phonenumber');
  }

  get cityid() {
    return this.addressForm.get('cityid');
  }

  get isdefault() {
    return this.addressForm.get('isdefault');
  }

  resionOption(event: any) {
    let x = event?.target?.value;
    // console.log(x);
  }

  address() {
    this.postAddress();
  }

  postAddress() {
    let header = new HttpHeaders({
      Authorization: localStorage.getItem('Token') ?? '',
    });

    this.http
      .postHeader(Address.postAddress, this.addressForm.value, header)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  getAddress() {
    let header = new HttpHeaders({
      Authorization: localStorage.getItem('Token') ?? '',
    });

    this.http.getHeader(Address.GetAddress + '?page=1', header).subscribe({
      next: (res) => {
        this.allAddress = res.result.useradresses;
        console.log(this.allAddress);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  editAddressForm = new FormGroup({
    id: new FormControl(''),
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[A-Za-z]*'),
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[A-Za-z]*'),
    ]),
    adressdetails: new FormControl('', [Validators.required]),
    phonenumber: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]+'),
      Validators.minLength(8),
      Validators.maxLength(13),
    ]),
    cityid: new FormControl(''),
    isdefault: new FormControl('', Validators.requiredTrue),
  });

  editAddress() {
    let header = new HttpHeaders({
      Authorization: localStorage.getItem('Token') ?? '',
    });

    let modal = {
      id: this.editAddressForm.value.id,
      firstname: this.editAddressForm.value.firstname,
      lastname: this.editAddressForm.value.lastname,
      adressdetails: this.editAddressForm.value.adressdetails,
      phonenumber: this.editAddressForm.value.phonenumber,
      cityid: this.editAddressForm.value.cityid,
      isdefault: this.editAddressForm.value.isdefault,
    };

    this.http.Put(Address.putAddress, modal, header).subscribe({
      next: (res) => {
        // console.log(res);
        this.getAddress();
        this.edit.nativeElement.click();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  setValue() {
    for (let i = 0; i < this.allAddress.length; i++) {
      if (this.allAddress[i].id == this.addressId) {
        console.log(this.allAddress[i]);
        this.editAddressForm.controls.id.setValue(this.allAddress[i].id);
        this.editAddressForm.controls.firstname.setValue(
          this.allAddress[i].firstname
        );
        this.editAddressForm.controls.lastname.setValue(
          this.allAddress[i].lastname
        );
        this.editAddressForm.controls.adressdetails.setValue(
          this.allAddress[i].adressdetails
        );
        this.editAddressForm.controls.phonenumber.setValue(
          this.allAddress[i].phonenumber
        );
        this.editAddressForm.controls.cityid.setValue(
          this.allAddress[i].cityid
        );
        this.editAddressForm.controls.isdefault.setValue(
          this.allAddress[i].isdefault
        );
      }
    }
  }

  getId(id: number) {
    this.addressId = id;
    console.log(this.addressId);
  }

  deleteAddress(id: number) {
    let header = new HttpHeaders({
      Authorization: localStorage.getItem('Token') ?? '',
      // 'Content-Type': 'application/json',
    });

    this.http.Delete(Address.deleteAddress, this.addressId === id, header).subscribe({
      next: (res) => {
        this.allAddress();
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {
    this.getUtiltRegions();
    this.getUtiltCity();
    this.resionOption(event);
    this.getAddress();
  }

  removeEntity(id: any) {
    let header = new HttpHeaders({
      Authorization: localStorage.getItem('Token') ?? '',
      // 'Content-Type': 'application/json',
    });

    return this.httpClient
      .delete('http://api.zigzag.orialserver.com/api/Address', {
        body: {
          id: id,
        },
        headers: header,
      })
      .subscribe(() => {
        this.allAddress();
      });
  }
}
