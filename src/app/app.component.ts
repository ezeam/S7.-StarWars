import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StarShipsListComponent } from './components/star-ships-list/star-ships-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, StarShipsListComponent, NavbarComponent, WelcomeComponent, HomeComponent, LoginComponent]
})
export class AppComponent {
  title = 'StarWars';
}
