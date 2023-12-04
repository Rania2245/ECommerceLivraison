import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
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
