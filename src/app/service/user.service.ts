import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url='https://fakestoreapi.com/products'
  constructor(private http:HttpClient) {}
    Users(){
      return this.http.get(this.url)
    }
   }

