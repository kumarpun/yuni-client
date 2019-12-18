import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private BASE_URL = 'http://localhost:3000/api/auth';

    constructor(private http: HttpClient) { }

    logIn(username: string, password: string): Observable<any> {
        const url = `${this.BASE_URL}/login`;
        return this.http.post<User>(url, { username, password });
    }

}