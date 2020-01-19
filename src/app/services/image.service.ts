import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';


@Injectable()
export class RestApiService {
  baseURL = "http://localhost:4000/api";
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Get Users
  getUsers() {
    return this.http.get(`${this.baseURL}/shoe/products`)
  }

  // Create User
  addUser(name: string, profileImage: File, price: number, category: string,
    description: string): Observable<any> {
    var formData: any = new FormData();
    formData.append("name", name);
    formData.append("image", profileImage);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("description", description);

    return this.http.post<Product>(`${this.baseURL}/shoe/products`, formData, {
      reportProgress: true,
      observe: 'events'
    })
  }

  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
