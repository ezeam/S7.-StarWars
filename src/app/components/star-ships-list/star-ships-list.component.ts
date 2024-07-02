import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { StarWarsService } from '../../services/star-wars.service';
import { Observable } from 'rxjs';
import { StarshipResults } from '../../interfaces/starship';

@Component({
  selector: 'app-star-ships-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './star-ships-list.component.html',
  styleUrl: './star-ships-list.component.css'
})
export class StarShipsListComponent {
  public starShipsResuts$!: Observable<StarshipResults>;;
  constructor(private service: StarWarsService) { }

  ngOnInit(): void {
    this.starShipsResuts$ = this.service.getStarShipList();
   }
}
