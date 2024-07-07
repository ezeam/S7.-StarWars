import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StarShipsListComponent } from './components/star-ships-list/star-ships-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, StarShipsListComponent, NavbarComponent]
})
export class AppComponent {
  title = 'StarWars';
}
