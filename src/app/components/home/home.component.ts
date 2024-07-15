import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router, public authenticationService: AuthenticationService) { }

  logOut(){
    localStorage.clear();
    this.router.navigate(['/home']);
    this.authenticationService.logout();
  }
}
