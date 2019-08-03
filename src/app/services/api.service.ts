import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('https://testapi.io/api/hilderh//product/all');
  }
}
