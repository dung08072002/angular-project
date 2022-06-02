import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/auth';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL: string = 'http://localhost:4201/';

  constructor(private http : HttpClient) { }
  signUp (user: IUser): Observable<IUser>{
    return this.http.post<IUser>(`${this.API_URL}/signup`, user);
  }
  signIn (user: IUser | undefined): Observable<IUser>{
    return this.http.post<IUser>(`${this.API_URL}/signin`, user);
  }
}
