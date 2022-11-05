import { Injectable,ViewChild,ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfilemodalService {

  @ViewChild('token') nameKey!: ElementRef;

  constructor(private http: HttpClient) { }

  user!:any
  token!: string

  setUser(user:any){
    this.user = user
  }

  getUser(){
    return this.user
  }

  // getUnsignProfile() {
  //   const token:JSON = JSON.parse(localStorage.getItem("token") || "");
  //   return this.http.post<any>('http://localhost:3000/login/unsigntoken', token)
  //     .pipe(map(profiledata => {
  //       return profiledata;
  //     }));
  // }
  
}
