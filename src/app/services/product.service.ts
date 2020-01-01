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
    public Url: string = 'http://localhost:3000/api/product';

    form: FormGroup = new FormGroup({
        productTitle: new FormControl(''),
        image: new FormControl('')
    });

    initializeFormGroup() {
        this.form.setValue({
            productTitle: '',
            image: ''
        });
    }

    constructor(private http: HttpClient) { }

    private generateHeaders() {
        return {
            headers: new HttpHeaders({ 'Content-Type': 'application/json'})
        };
    }

    AddNewProduct(data) {
        return this.http.post(`${this.Url}/addProduct`, data);
    }
}