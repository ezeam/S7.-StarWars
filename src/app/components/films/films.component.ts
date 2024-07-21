import { Component, Input, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { Film } from '../../interfaces/film';
import { StarWarsService } from '../../services/star-wars.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-films',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './films.component.html',
  styleUrl: './films.component.css'
})
export class FilmsComponent implements OnInit {

  filmsData$!: Observable<Film[]>;  // Observable de un array de objetos Film
  @Input() films: string[] = [];  // Array de URLs de películas

  constructor(private service: StarWarsService) {}

  ngOnInit(): void {
    // Aquí solo necesitas la URL para obtener los detalles de las películas
    const requests = this.films.map(url => this.service.getFilmDetails(url));
    this.filmsData$ = forkJoin(requests);  
  }

  getPicture(url: string): string {
    const id = url.split('/');
    return `https://starwars-visualguide.com/assets/img/films/${id[5]}.jpg`;
  }
}
