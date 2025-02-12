import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class DataService{

  public url = 'http://localhost:3000/v1/products';

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<Product[]>(`${this.url}/products`);
  }

  authenticate(data){
    return this.http.post(`${this.url}/accounts/authenticate`, data);
  }
}
