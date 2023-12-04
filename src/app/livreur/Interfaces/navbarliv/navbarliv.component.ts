import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbarliv',
  templateUrl: './navbarliv.component.html',
  styleUrls: ['./navbarliv.component.css'],
})
export class NavbarlivComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goBackToLogin() {
    localStorage.removeItem('user');
    this.router.navigate(['/livreur/login']);
  }
}
