import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isUserLogin(){
    if(localStorage.getItem('Token')) {
      return true;
    } else {
      return false;
    }
  }

}
