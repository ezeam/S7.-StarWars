import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { StarWarsService } from '../../services/star-wars.service';
import { Observable } from 'rxjs';
import { StarshipResults, Starship } from '../../interfaces/starship';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterOutlet, RouterModule } from '@angular/router';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-star-ships-list',
  standalone: true,
  imports: [AsyncPipe, NavbarComponent, RouterOutlet, RouterModule, InfiniteScrollDirective],
  templateUrl: './star-ships-list.component.html',
  styleUrl: './star-ships-list.component.css'
})
export class StarShipsListComponent implements OnInit {
  public starshipResult$!: Observable<StarshipResults>;
  constructor(private service: StarWarsService) { }

  starshipList: Starship[] = [];
  nextUrl: string = '';

  ngOnInit(): void {
    this.starshipResult$ = this.service.getStarShipList();

    this.service.getStarShipList().subscribe({
      next: (response) => {
        this.starshipList = response.results;
        this.nextUrl = response.next ? response.next : 'endOfData';
      }
    })
  }

  onScroll() {
    if (this.nextUrl && this.nextUrl !== 'endOfData') {
      this.service.getStarShipList(this.nextUrl).subscribe({
        next: (response) => {
          this.starshipList = [...this.starshipList, ...response.results];
          this.nextUrl = response.next || 'endOfData';
        }
      });
    }
  }

  extractId(url: string) {
    let id = url.split('/').filter(part => part !== '').pop();
    return id;
  }
}
