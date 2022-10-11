import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-service',
  templateUrl: './customer-service.component.html',
  styleUrls: ['./customer-service.component.scss']
})
export class CustomerServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contactForm= new FormGroup({
    fullName : new FormControl('', Validators.required),
    email : new FormControl('', [Validators.required, Validators.email]),
    tel : new FormControl('', [Validators.required, Validators.minLength(9),Validators.maxLength(11)]),
    message : new FormControl('', Validators.required),
  })

  get fullName(){
    return this.contactForm.get('fullName')
  }

  get email(){
    return this.contactForm.get('email')
  }

  get tel(){
    return this.contactForm.get('tel')
  }

  get subject(){
    return this.contactForm.get('subject')
  }

  get message(){
    return this.contactForm.get('message')
  }

  sendMessage() {
    console.log('s' + this.contactForm.value);

  }

}
