import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as _ from 'lodash';


@Injectable({
    providedIn: 'root'
})

export class DigiiService {

    public Url: string = 'http://localhost:9000';

    constructor(private http: HttpClient) { }

    RunTest(){
        return this.http.get(`${this.Url}/test`);
    }
}