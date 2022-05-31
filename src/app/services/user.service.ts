import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/auth';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL: string = 'http://localhost:4201/';

  constructor(private http : HttpClient) { }
  signUp (user: IUser){
    return this.http.post(`${this.API_URL}/signup`, user);
  }
  signIn (user: IUser){
    return this.http.post(`${this.API_URL}/signin`, user);
  }
}
