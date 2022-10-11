import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl, baseUrlFace } from './global-services.service';

@Injectable({
  providedIn: 'root',
})
export class HttpHealperService {
  constructor(private HttpClient: HttpClient) {}

  Get(endPoint: string): Observable<any> {
    return this.HttpClient.get(baseUrl + endPoint);
  }

  GetByQuery(endPoint: string,id : any): Observable<any> {
    return this.HttpClient.get(baseUrl + endPoint + id);
  }

  Post(endPoint: string, model: any,): Observable<any> {
    return this.HttpClient.post<any>(baseUrl + endPoint, model, );
  }

  Put(endPoint: string, model: any, header:HttpHeaders): Observable<any> {
    return this.HttpClient.put<any>(baseUrl + endPoint, model, {headers:header});
  }

  Delete(endPoint: string, model: any, header:HttpHeaders): Observable<any> {
    return this.HttpClient.delete<any>(baseUrl + endPoint + model, {headers:header});
  }

  postCard(endPoint: string , model:any) : Observable<any> {
    return this.HttpClient.post(baseUrlFace + endPoint,model);
  }

  postPassword(endPoint: string , model:any , header:HttpHeaders) : Observable<any> {
    return this.HttpClient.post(baseUrl + endPoint,model ,{headers:header});
  }

  postHeader(endPoint: string , modal:any , header:HttpHeaders) : Observable<any> {
    return this.HttpClient.post(baseUrl + endPoint , modal ,{headers:header});
  }

  getHeader(endPoint: string , header:HttpHeaders) : Observable<any> {
    return this.HttpClient.get(baseUrl + endPoint ,{headers:header});
  }

  getIdHeader(endPoint: string ,id : any, header:HttpHeaders) : Observable<any> {
    return this.HttpClient.get(baseUrl + endPoint + id ,{headers:header});
  }

  postProfile(endPoint: string , model:any , header:HttpHeaders) : Observable<any> {
    return this.HttpClient.post(baseUrl + endPoint,model ,{headers:header});
  }

  GetCard(endPoint: string): Observable<any> {
    return this.HttpClient.get(baseUrlFace + endPoint);
  }

}
