import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { StarWarsService } from '../../services/star-wars.service';
import { Observable } from 'rxjs';
import { StarshipResults, Starship } from '../../interfaces/starship';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-star-ships-list',
  standalone: true,
  imports: [AsyncPipe, NavbarComponent, RouterOutlet, RouterModule],
  templateUrl: './star-ships-list.component.html',
  styleUrl: './star-ships-list.component.css'
})
export class StarShipsListComponent {
  public starShipsResuts$!: Observable<StarshipResults>;;
  constructor(private service: StarWarsService) { }
  starshipArray: Starship[] = [];
  nextUrl: string = '';

  ngOnInit(): void {
    this.starShipsResuts$ = this.service.getStarShipList();
   }

   extractId(url: string): string {
    const id = url.split('/').filter(part => part !== '').pop();
    return id || '';
  }

  
}
