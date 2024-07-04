import { Component } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Starship } from '../../interfaces/starship';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from '../../services/star-wars.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-starship-details',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './starship-details.component.html',
  styleUrl: './starship-details.component.css'
})
export class StarshipDetailsComponent {
  starship$!: Observable<Starship>;
  imageUrl: string = '';

  constructor(private route: ActivatedRoute, private service: StarWarsService) { }
  
  ngOnInit() {
    this.starship$ = this.route.params.pipe(
      switchMap(params => {
        const id = params['id'];
        this.imageUrl = this.service.getStarshipImage(id);
        return this.service.getStarshipDetails(id);
      })
    );
  }

  imageError(){
    this.imageUrl = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg';
  }
}
