import { AuthService } from './../auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  authenticated = false;
  loggedInSub: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.loggedInSub = AuthService.loggedIn.subscribe( loggedIn => this.authenticated = loggedIn )
  }

  ngOnDestroy(): void{
    if (this.loggedInSub) this.loggedInSub.unsubscribe()
  }

  logout(): void {
    AuthService.loggedIn.next(false)
  }

}
