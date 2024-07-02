import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StarShipsListComponent } from './components/star-ships-list/star-ships-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StarShipsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'StarWars';
}
