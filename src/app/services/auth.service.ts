import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: boolean = false;

  isAuthenticated() {
    return this.loggedIn;
  }

  login() {
    return this.loggedIn = true;
  }

  logout() {
    return this.loggedIn = false;
  }

  constructor() { }
}
