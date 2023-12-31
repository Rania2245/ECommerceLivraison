import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(
    private router:Router,
  ) {
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
    this.router.navigate(['']).then(() => window.location.reload());
  }
}
