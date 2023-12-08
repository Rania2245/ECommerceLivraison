import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-home',
  templateUrl: './nav-home.component.html',
  styleUrls: ['./nav-home.component.css']
})
export class NavHomeComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor() {
    this.checkLoginStatus();
  }

  ngOnInit(): void {}

  checkLoginStatus() {
    const user = localStorage.getItem('user');
    // Update isLoggedIn based on the presence of a user
    this.isLoggedIn = !!user;
  }

  logout() {
    localStorage.removeItem('user');
    this.isLoggedIn = false;
  }
}
