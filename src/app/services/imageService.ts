import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Image } from './image';


@Injectable()
export class PhotoService {

    constructor(private http: HttpClient) { }

    getImage() {
    return this.http.get<any>('../../assets/carusel.json')
      .toPromise()
      .then(res => <Image[]>res.data)
      .then(data => { return data; });
    }
}
