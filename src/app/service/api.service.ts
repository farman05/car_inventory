import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_URL = 'http://localhost:8888/car_inventory_api/';
   headers;
  constructor(private http: HttpClient) {
     this.headers = new Headers();
      this.headers.append('Content-Type', 'application/x-www-form-urlencoded');

  }


  getAllData(apiName) {
      return this.http.get(this.BASE_URL + apiName, {headers: this.headers});
  }

  postData(apiName, data) {
        return this.http.post(this.BASE_URL + apiName, data, {headers: this.headers } );
  }


  setToken(token) {
      localStorage.setItem('token', token);
  }

  getToken()  {
      const token = localStorage.getItem('token');
      return token;
  }

  deleteToken() {
     localStorage.removeItem('token');
  }

}
