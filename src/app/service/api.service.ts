import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // BASE_URL = 'http://localhost:8888/car_inventory_api/';
  BASE_URL = 'https://cartestinginventory.000webhostapp.com/';
   headers;
  constructor(private http: HttpClient) {

  }


  getAllData(apiName) {
      return this.http.get(this.BASE_URL + apiName);
  }

  postData(apiName, data) {
        return this.http.post(this.BASE_URL + apiName, data, {
          headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})});
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
