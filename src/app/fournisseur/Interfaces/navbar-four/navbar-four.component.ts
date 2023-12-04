import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-four',
  templateUrl: './navbar-four.component.html',
  styleUrls: ['./navbar-four.component.css'],
})
export class NavbarFourComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goBackToLogin() {
    localStorage.removeItem('user');
    this.router.navigate(['/fournisseur/login']);
  }
}
