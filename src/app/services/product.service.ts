import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Product } from '../models/product';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    public Url: string = 'http://localhost:4000/api/product';
    public eUrl: string = 'http://localhost:3000/';

    form: FormGroup = new FormGroup({
        productTitle: new FormControl(''),
        image: new FormControl(''),
        originalPrice: new FormControl(''),
        discount: new FormControl(''),
    });

    initializeFormGroup() {
        this.form.setValue({
            productTitle: '',
            image: '',
            originalPrice: '',
            discount: '',
        });
    }

    constructor(private http: HttpClient) { }

    getHeaders(){
        const token = localStorage.getItem('token');
        return token ? new HttpHeaders().set("token", token) : null;
      }

    AddNewProduct(data) {
        return this.http.post(`${this.Url}/addProduct`, data);
    }

    get(link: string) {
        return this.http.get(this.eUrl + link, {headers: this.getHeaders()}).toPromise();
    }
}