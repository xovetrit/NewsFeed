import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(){
    return users
  }

  LoginUser(log, pas){
    return users.find(user => user.login === log && user.password === pas)
  }

}

var users = [
  {
    login: 'admin',
    displayName: 'Administrator',
    isAdmin: true,
    password: '123'
  }
]
