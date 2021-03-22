import { AuthService } from './../auth.service';
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin;
  userPassword;
  user;

  constructor(private usersService: UsersService, private route: Router) { }

  ngOnInit(): void {
  }

  Login(){
    this.user = this.usersService.LoginUser(this.userLogin, this.userPassword)
    AuthService.loggedIn.next(true)
    this.route.navigate(['/'])
  }
}
