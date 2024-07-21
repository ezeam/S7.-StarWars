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

  filmsData$!: Observable<Film[]>;  
  @Input() films: string[] = [];  

  constructor(private service: StarWarsService) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    const requests = this.films.map(url => this.service.getFilmDetails(url));
    this.filmsData$ = forkJoin(requests);  
  }

  getPicture(url: string): string {
    const id = url.split('/');
    return `https://starwars-visualguide.com/assets/img/films/${id[5]}.jpg`;
  }
}
